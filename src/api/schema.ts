import { merge } from "lodash";
import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";

import SharedScalarTypes from "../api/shared/types/scalars";

import { UserTypes, UserMutations } from "./modules/user/user.interface";

import {
  AuthorTypes,
  AuthorQueries,
  AuthorMutations,
} from "./modules/author/author.interface";

import {
  ActorTypes,
  ActorQueries,
  ActorMutations,
} from "./modules/actor/actor.interface";

import {
  MovieTypes,
  MovieQueries,
  MovieMutations,
} from "./modules/movie/movie.interface";

const Root = gql`
  # The dummy queries and mutations are necessary because
  # graphql-js cannot have empty root types and we only extend
  # these types later on
  # Ref: apollographql/graphql-tools#293
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

const resolvers = merge(
  {},
  SharedScalarTypes.resolvers,

  // queries
  AuthorQueries,
  ActorQueries,
  MovieQueries,

  // mutations
  UserMutations,
  AuthorMutations,
  ActorMutations,
  MovieMutations
);

const schema = makeExecutableSchema({
  typeDefs: [
    Root,
    SharedScalarTypes.typeDefs,

    UserTypes,
    AuthorTypes,
    ActorTypes,
    MovieTypes,
  ],
  resolvers,
});

export default schema as GraphQLSchema;
