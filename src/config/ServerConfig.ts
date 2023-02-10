import { z } from "zod";

const ServerConfigSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  PORT: z
    .string()
    .length(4)
    .transform((val: string) => Number(val)),
  DB_CONNECTION_STRING: z.string().url(),
  DB_TESTING_CONNECTION_STRING: z.string().url(),
  JWT_SECRET: z.string(),
});

// extract the inferred type
export type ServerConfig = z.infer<typeof ServerConfigSchema>;

export default ServerConfigSchema;
