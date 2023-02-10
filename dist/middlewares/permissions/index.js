"use strict";
exports.__esModule = true;
exports.permissions = void 0;
var graphql_shield_1 = require("graphql-shield");
var rules_1 = require("./rules");
exports.permissions = (0, graphql_shield_1.shield)({
    Mutation: {
        "*": rules_1.isAuthenticated,
        signIn: rules_1.notAuthenticated
    },
    Query: {
        "*": rules_1.isAuthenticated
    }
}, {
    fallbackError: "Unauthorized request!",
    allowExternalErrors: true
});
//# sourceMappingURL=index.js.map