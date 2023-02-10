"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
var ServerConfigSchema = zod_1.z.object({
    NODE_ENV: zod_1.z["enum"](["development", "test", "production"]),
    PORT: zod_1.z
        .string()
        .length(4)
        .transform(function (val) { return Number(val); }),
    DB_CONNECTION_STRING: zod_1.z.string().url(),
    DB_TESTING_CONNECTION_STRING: zod_1.z.string().url(),
    JWT_SECRET: zod_1.z.string()
});
exports["default"] = ServerConfigSchema;
//# sourceMappingURL=ServerConfig.js.map