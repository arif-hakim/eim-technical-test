"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var lodash_1 = require("lodash");
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = require("@graphql-tools/schema");
var scalars_1 = __importDefault(require("../api/shared/types/scalars"));
var user_interface_1 = require("./modules/user/user.interface");
var author_interface_1 = require("./modules/author/author.interface");
var actor_interface_1 = require("./modules/actor/actor.interface");
var movie_interface_1 = require("./modules/movie/movie.interface");
var Root = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  # The dummy queries and mutations are necessary because\n  # graphql-js cannot have empty root types and we only extend\n  # these types later on\n  # Ref: apollographql/graphql-tools#293\n  type Query {\n    _: Boolean\n  }\n  type Mutation {\n    _: Boolean\n  }\n"], ["\n  # The dummy queries and mutations are necessary because\n  # graphql-js cannot have empty root types and we only extend\n  # these types later on\n  # Ref: apollographql/graphql-tools#293\n  type Query {\n    _: Boolean\n  }\n  type Mutation {\n    _: Boolean\n  }\n"])));
var resolvers = (0, lodash_1.merge)({}, scalars_1["default"].resolvers, 
// queries
author_interface_1.AuthorQueries, actor_interface_1.ActorQueries, movie_interface_1.MovieQueries, 
// mutations
user_interface_1.UserMutations, author_interface_1.AuthorMutations, actor_interface_1.ActorMutations, movie_interface_1.MovieMutations);
var schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [
        Root,
        scalars_1["default"].typeDefs,
        user_interface_1.UserTypes,
        author_interface_1.AuthorTypes,
        actor_interface_1.ActorTypes,
        movie_interface_1.MovieTypes,
    ],
    resolvers: resolvers
});
exports["default"] = schema;
var templateObject_1;
//# sourceMappingURL=schema.js.map