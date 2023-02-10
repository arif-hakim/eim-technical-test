import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { AuthorInstance } from "../../../../models/Author";

import { DummyAuthors, seedAuthors } from "../../../../seeders/author.seeder";
import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { resetDatabase } from "../../../../testing/dbHelper";

let authors: DummyAuthors;
let users: DummyUsers;

beforeAll(async () => {
  users = await seedUsers();
  authors = await seedAuthors();
});

afterAll(async () => {
  await resetDatabase();
  await db.sequelize.close();
});

describe("Authors Query", () => {
  it("should get all authors", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const query = /* GraphQL */ `
      query Authors {
        authors {
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
    let authorResults = result.data?.authors as Array<AuthorInstance>;
    const firstAuthor = authorResults.find(
      ({ id }) => id === authors.testAuthor.id
    );
    expect(firstAuthor).toBeTruthy();
    expect(firstAuthor?.name).toBe(authors.testAuthor.name);
    expect(firstAuthor?.nationality).toBe(authors.testAuthor.nationality);

    const secondAuthor = authorResults.find(
      ({ id }) => id === authors.testSecondAuthor.id
    );
    expect(secondAuthor).toBeTruthy();
    expect(secondAuthor?.name).toBe(authors.testSecondAuthor.name);
    expect(secondAuthor?.nationality).toBe(
      authors.testSecondAuthor.nationality
    );
  });
});
