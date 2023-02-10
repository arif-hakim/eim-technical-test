// Config setup based on the following code:
// https://github.com/trpc/examples-next-prisma-starter/blob/next/src/server/env.js

import path = require("path");
import { config } from "dotenv";

import ServerConfigSchema from "./ServerConfig";

// Load the env file.
config({ path: path.resolve(__dirname, "../../.env") });

// Parse the Configuration Schemas
const parsedServerConfig = ServerConfigSchema.safeParse(process.env);

if (parsedServerConfig.success === false) {
  console.error(
    "❌ Invalid environment variables:",
    JSON.stringify(parsedServerConfig.error.format(), null, 4)
  );
  process.exit(1);
}

export const ServerConfig = parsedServerConfig.data;
