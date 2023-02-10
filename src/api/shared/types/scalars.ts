/**
 * Custom scalars (data types, like Int, String,...) live in this file,
 * both their type definitions and their resolvers
 */
import { GraphQLDate, GraphQLDateTime } from "graphql-iso-date";
import { resolvers as ScalarsResolvers } from "graphql-scalars";

const {
  LocalTime,
  PositiveInt,
  PositiveFloat,
  NonNegativeFloat,
  NonEmptyString,
  EmailAddress,
  JSON,
} = ScalarsResolvers;

const typeDefs = /* GraphQL */ `
  scalar Date
  scalar DateTime
  scalar LocalTime
  scalar NonEmptyString
  scalar PositiveInt
  scalar PositiveFloat # float greater than 0
  scalar NonNegativeFloat # float 0 or greater than 0
  scalar EmailAddress
  scalar JSONObject
`;

const resolvers = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  LocalTime,
  NonEmptyString,
  PositiveInt,
  PositiveFloat,
  NonNegativeFloat,
  EmailAddress,
  JSONObject: JSON,
};

export default {
  typeDefs,
  resolvers,
};
