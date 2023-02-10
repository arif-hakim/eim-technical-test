import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { UpdateActorPayload } from "../../../../generated/graphql";
import { v4 as uuidv4 } from "uuid";

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
  mutation updateActor($input: UpdateActorInput!) {
    updateActor(input: $input) {
      actor {
        id
        name
        nationality
      }
    }
  }
`;

describe("Update Actor Mutation", () => {
  it("should update an actor", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      id: actors.testActor.id,
      patch: {
        name: "Bruce Wayne",
        nationality: "Canada",
      },
    };

    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });

    let { actor } = result.data?.updateActor as UpdateActorPayload;
    expect(actor).toBeTruthy();
    expect(actor.id).toBe(input.id);
    expect(actor.name).toBe(input.patch.name);
    expect(actor.nationality).toBe(input.patch.nationality);
  });

  it("should throw error if id is invalid", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      id: uuidv4(),
      patch: {
        name: "Bruce Wayne",
        nationality: "Canada",
      },
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
      expect(result.errors[0].message).toBe("Actor could not be found.");
  });
});
