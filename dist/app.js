"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.httpServer = void 0;
var fs_1 = __importDefault(require("fs"));
var server_1 = require("@apollo/server");
var express4_1 = require("@apollo/server/express4");
var graphql_middleware_1 = require("graphql-middleware");
var drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = require("body-parser");
var config_1 = require("./config");
// Local imports
var context_1 = __importDefault(require("./context"));
var schema_1 = __importDefault(require("./api/schema"));
var permissions_1 = require("./middlewares/permissions");
var authenticateUser_1 = require("./middlewares/authenticateUser");
var graphiQLHTML = fs_1["default"].readFileSync(path_1["default"].resolve(__dirname, "../public/index.html"));
var PORT = config_1.ServerConfig.PORT;
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var app, schemaWithPermissions, server, errorHandler;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log({
                        NODE_ENV: config_1.ServerConfig.NODE_ENV
                    });
                    app = (0, express_1["default"])();
                    exports.httpServer = http_1["default"].createServer(app);
                    schemaWithPermissions = (0, graphql_middleware_1.applyMiddleware)(schema_1["default"], permissions_1.permissions);
                    server = new server_1.ApolloServer({
                        schema: schemaWithPermissions,
                        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer: exports.httpServer })],
                        csrfPrevention: true
                    });
                    return [4 /*yield*/, server.start()];
                case 1:
                    _a.sent();
                    app.use("/graphql", (0, cors_1["default"])(), (0, body_parser_1.json)(), authenticateUser_1.authenticateUser, (0, express4_1.expressMiddleware)(server, {
                        context: context_1["default"]
                    }));
                    app.use("/graphiql", function (req, res) {
                        res.writeHead(200, { "Content-Type": "text/html" });
                        return res.end(graphiQLHTML);
                    });
                    errorHandler = function (err, req, res, next) {
                        console.error(err.stack);
                        res.status(500).send("Internal server error!");
                    };
                    app.use(errorHandler);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            return exports.httpServer.listen({ port: PORT }, resolve);
                        })];
                case 2:
                    _a.sent();
                    console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(PORT, "/graphql"));
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (error) {
    console.log("Error occured: ", error);
});
//# sourceMappingURL=app.js.map