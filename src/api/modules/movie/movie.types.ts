import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    description: String!
    minutes: PositiveInt!
    author: Author!
    casts: [MovieCast!]!
  }

  type MovieCast {
    id: ID!
    actor: Actor!
    castName: String!
    movie: Movie!
  }

  # GET
  input MovieInput {
    id: ID!
  }

  # CREATE
  type CreateMoviePayload {
    movie: Movie!
  }

  input CreateMovieInput {
    title: String!
    description: String!
    minutes: PositiveInt!
    authorId: String!
  }

  type AddMovieCastPayload {
    movieCast: MovieCast!
  }

  input AddMovieCastInput {
    castName: String!
    actorId: String!
    movieId: String!
  }

  # UPDATE
  type UpdateMoviePayload {
    movie: Movie!
  }

  input UpdateMovieInput {
    id: ID!
    patch: UpdateMoviePatch!
  }

  input UpdateMoviePatch {
    title: String
    description: String
    minutes: PositiveInt
    authorId: String
  }

  # DELETE
  type DeleteMoviePayload {
    id: ID!
  }

  input DeleteMovieInput {
    id: ID!
  }

  type RemoveMovieCastPayload {
    id: ID!
  }

  input RemoveMovieCastInput {
    id: ID!
  }

  extend type Query {
    movie(input: MovieInput!): Movie!
    movies: [Movie!]!
  }

  extend type Mutation {
    createMovie(input: CreateMovieInput!): CreateMoviePayload!
    updateMovie(input: UpdateMovieInput!): UpdateMoviePayload!
    deleteMovie(input: DeleteMovieInput!): DeleteMoviePayload!
    addMovieCast(input: AddMovieCastInput!): AddMovieCastPayload!
    removeMovieCast(input: RemoveMovieCastInput!): RemoveMovieCastPayload!
  }
`;

export default typeDefs;
