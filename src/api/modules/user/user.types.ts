import { gql } from "apollo-server-express";

const typeDefs = gql`
  # SIGN IN
  input SignInInput {
    username: String!
    password: String!
  }

  type SignInPayload {
    token: String!
  }

  extend type Mutation {
    signIn(input: SignInInput!): SignInPayload!
  }
`;

export default typeDefs;
