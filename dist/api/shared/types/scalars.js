"use strict";
exports.__esModule = true;
/**
 * Custom scalars (data types, like Int, String,...) live in this file,
 * both their type definitions and their resolvers
 */
var graphql_iso_date_1 = require("graphql-iso-date");
var graphql_scalars_1 = require("graphql-scalars");
var LocalTime = graphql_scalars_1.resolvers.LocalTime, PositiveInt = graphql_scalars_1.resolvers.PositiveInt, PositiveFloat = graphql_scalars_1.resolvers.PositiveFloat, NonNegativeFloat = graphql_scalars_1.resolvers.NonNegativeFloat, NonEmptyString = graphql_scalars_1.resolvers.NonEmptyString, EmailAddress = graphql_scalars_1.resolvers.EmailAddress, JSON = graphql_scalars_1.resolvers.JSON;
var typeDefs = /* GraphQL */ "\n  scalar Date\n  scalar DateTime\n  scalar LocalTime\n  scalar NonEmptyString\n  scalar PositiveInt\n  scalar PositiveFloat # float greater than 0\n  scalar NonNegativeFloat # float 0 or greater than 0\n  scalar EmailAddress\n  scalar JSONObject\n";
var resolvers = {
    Date: graphql_iso_date_1.GraphQLDate,
    DateTime: graphql_iso_date_1.GraphQLDateTime,
    LocalTime: LocalTime,
    NonEmptyString: NonEmptyString,
    PositiveInt: PositiveInt,
    PositiveFloat: PositiveFloat,
    NonNegativeFloat: NonNegativeFloat,
    EmailAddress: EmailAddress,
    JSONObject: JSON
};
exports["default"] = {
    typeDefs: typeDefs,
    resolvers: resolvers
};
//# sourceMappingURL=scalars.js.map