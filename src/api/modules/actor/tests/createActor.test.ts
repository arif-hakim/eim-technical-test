import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { CreateActorPayload } from "../../../../generated/graphql";

import { DummyActors, seedActors } from "../../../../seeders/actor.seeder";
import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { resetDatabase } from "../../../../testing/dbHelper";

let actors: DummyActors;
let users: DummyUsers;

beforeAll(async () => {
  users = await seedUsers();
  actors = await seedActors();
});

afterAll(async () => {
  await resetDatabase();
  await db.sequelize.close();
});

const query = /* GraphQL */ `
  mutation createActor($input: CreateActorInput!) {
    createActor(input: $input) {
      actor {
        id
        name
        nationality
      }
    }
  }
`;

describe("Create Actor Mutation", () => {
  it("should create an actor", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      name: "Bruce Wayne",
      nationality: "Canada",
    };

    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });

    let { actor } = result.data?.createActor as CreateActorPayload;
    expect(actor).toBeTruthy();
    expect(actor.name).toBe(input.name);
    expect(actor.nationality).toBe(input.nationality);
  });

  it("should throw error if one of required input is missing", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      name: "Bruce Wayne",
    };

    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });
    expect(result.errors).toHaveLength(1);
    if (result.errors)
      expect(
        result.errors[0].message.includes(
          'Field "nationality" of required type "String!" was not provided.'
        )
      ).toBeTruthy();
  });
});
