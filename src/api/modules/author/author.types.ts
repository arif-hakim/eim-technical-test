import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    nationality: String!
  }

  input AuthorInput {
    id: ID!
  }

  # CREATE
  type CreateAuthorPayload {
    author: Author!
  }

  input CreateAuthorInput {
    name: String!
    nationality: String!
  }

  # UPDATE
  type UpdateAuthorPayload {
    author: Author!
  }

  input UpdateAuthorInput {
    id: ID!
    patch: UpdateAuthorPatch!
  }

  input UpdateAuthorPatch {
    name: String
    nationality: String
  }

  # DELETE
  type DeleteAuthorPayload {
    id: ID!
  }

  input DeleteAuthorInput {
    id: ID!
  }

  extend type Query {
    author(input: AuthorInput!): Author!
    authors: [Author!]!
  }

  extend type Mutation {
    createAuthor(input: CreateAuthorInput!): CreateAuthorPayload!
    updateAuthor(input: UpdateAuthorInput!): UpdateAuthorPayload!
    deleteAuthor(input: DeleteAuthorInput!): DeleteAuthorPayload!
  }
`;

export default typeDefs;
