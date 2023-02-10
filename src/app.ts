import fs from "fs";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { applyMiddleware } from "graphql-middleware";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import path from "path";
import express, {
  Application,
  ErrorRequestHandler,
  Request,
  Response,
} from "express";
import http, { type Server } from "http";
import cors from "cors";
import { json } from "body-parser";
import { ServerConfig } from "./config";

// Local imports
import context, { type Context } from "./context";
import schema from "./api/schema";
import { permissions } from "./middlewares/permissions";
import { authenticateUser } from "./middlewares/authenticateUser";

const graphiQLHTML = fs.readFileSync(
  path.resolve(__dirname, "../public/index.html")
);
const PORT = ServerConfig.PORT;

export let httpServer: Server;

async function main() {
  console.log({
    NODE_ENV: ServerConfig.NODE_ENV,
  });
  const app: Application = express();
  httpServer = http.createServer(app);

  const schemaWithPermissions = applyMiddleware(schema, permissions);

  const server = new ApolloServer<Context>({
    schema: schemaWithPermissions,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    csrfPrevention: true,
  });
  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    authenticateUser,
    expressMiddleware(server, {
      context,
    })
  );

  app.use("/graphiql", (req: Request, res: Response) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(graphiQLHTML);
  });

  const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal server error!");
  };
  app.use(errorHandler);

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );

  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

main().catch((error) => {
  console.log("Error occured: ", error);
});
