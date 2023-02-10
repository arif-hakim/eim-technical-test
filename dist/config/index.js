"use strict";
// Config setup based on the following code:
// https://github.com/trpc/examples-next-prisma-starter/blob/next/src/server/env.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ServerConfig = void 0;
var path = require("path");
var dotenv_1 = require("dotenv");
var ServerConfig_1 = __importDefault(require("./ServerConfig"));
// Load the env file.
(0, dotenv_1.config)({ path: path.resolve(__dirname, "../../.env") });
// Parse the Configuration Schemas
var parsedServerConfig = ServerConfig_1["default"].safeParse(process.env);
if (parsedServerConfig.success === false) {
    console.error("❌ Invalid environment variables:", JSON.stringify(parsedServerConfig.error.format(), null, 4));
    process.exit(1);
}
exports.ServerConfig = parsedServerConfig.data;
//# sourceMappingURL=index.js.map