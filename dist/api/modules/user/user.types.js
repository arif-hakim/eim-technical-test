"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  # SIGN IN\n  input SignInInput {\n    username: String!\n    password: String!\n  }\n\n  type SignInPayload {\n    token: String!\n  }\n\n  extend type Mutation {\n    signIn(input: SignInInput!): SignInPayload!\n  }\n"], ["\n  # SIGN IN\n  input SignInInput {\n    username: String!\n    password: String!\n  }\n\n  type SignInPayload {\n    token: String!\n  }\n\n  extend type Mutation {\n    signIn(input: SignInInput!): SignInPayload!\n  }\n"])));
exports["default"] = typeDefs;
var templateObject_1;
//# sourceMappingURL=user.types.js.map