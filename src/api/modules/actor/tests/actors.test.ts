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

describe("Actors Query", () => {
  it("should get all actors", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const query = /* GraphQL */ `
      query Actors {
        actors {
          id
          name
          nationality
        }
      }
    `;
    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
    });
    let actorResults = result.data?.actors as Array<ActorInstance>;
    const firstActor = actorResults.find(
      ({ id }) => id === actors.testActor.id
    );
    expect(firstActor).toBeTruthy();
    expect(firstActor?.name).toBe(actors.testActor.name);
    expect(firstActor?.nationality).toBe(actors.testActor.nationality);

    const secondActor = actorResults.find(
      ({ id }) => id === actors.testSecondActor.id
    );
    expect(secondActor).toBeTruthy();
    expect(secondActor?.name).toBe(actors.testSecondActor.name);
    expect(secondActor?.nationality).toBe(actors.testSecondActor.nationality);
  });
});
