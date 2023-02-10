import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Actor {
    id: ID!
    name: String!
    nationality: String!
  }

  input ActorInput {
    id: ID!
  }

  # CREATE
  type CreateActorPayload {
    actor: Actor!
  }

  input CreateActorInput {
    name: String!
    nationality: String!
  }

  # UPDATE
  type UpdateActorPayload {
    actor: Actor!
  }

  input UpdateActorInput {
    id: ID!
    patch: UpdateActorPatch!
  }

  input UpdateActorPatch {
    name: String
    nationality: String
  }

  # DELETE
  type DeleteActorPayload {
    id: ID!
  }

  input DeleteActorInput {
    id: ID!
  }

  extend type Query {
    actor(input: ActorInput!): Actor!
    actors: [Actor!]!
  }

  extend type Mutation {
    createActor(input: CreateActorInput!): CreateActorPayload!
    updateActor(input: UpdateActorInput!): UpdateActorPayload!
    deleteActor(input: DeleteActorInput!): DeleteActorPayload!
  }
`;

export default typeDefs;
