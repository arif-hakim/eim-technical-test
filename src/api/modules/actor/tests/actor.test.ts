import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { ActorInstance } from "../../../../models/Actor";
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

describe("Actor Query", () => {
  it("should get single actor", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const query = /* GraphQL */ `
      query Actor($input: ActorInput!) {
        actor(input: $input) {
          id
          name
          nationality
        }
      }
    `;
    const input = {
      id: actors.testActor.id,
    };
    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });
    let actor = result.data?.actor as ActorInstance;
    expect(actor).toBeTruthy();
    expect(actor.name).toBe(actors.testActor.name);
    expect(actor.nationality).toBe(actors.testActor.nationality);
  });

  it("should throw error if actor could not be found", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const query = /* GraphQL */ `
      query Actor($input: ActorInput!) {
        actor(input: $input) {
          id
          name
          nationality
        }
      }
    `;
    const input = {
      id: uuidv4(),
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
      expect(result.errors[0].message).toBe("Actor could not be found!");
  });
});
