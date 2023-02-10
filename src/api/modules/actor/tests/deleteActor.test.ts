import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { DeleteActorPayload } from "../../../../generated/graphql";
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
  mutation deleteActor($input: DeleteActorInput!) {
    deleteActor(input: $input) {
      id
    }
  }
`;

describe("Delete Actor Mutation", () => {
  it("should delete an actor", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

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

    let { id } = result.data?.deleteActor as DeleteActorPayload;
    expect(id).toBe(input.id);

    // check in db
    const deletedActor = await db.Actor.findOne({
      where: {
        id: actors.testActor.id,
      },
    });
    expect(deletedActor).toBeNull();
  });

  it("should throw error if id is invalid", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

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

    expect(result.errors).toHaveLength(1);
    if (result.errors)
      expect(result.errors[0].message).toBe("Actor could not be found.");
  });
});
