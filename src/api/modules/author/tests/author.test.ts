import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { AuthorInstance } from "../../../../models/Author";
import { v4 as uuidv4 } from "uuid";

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

describe("Author Query", () => {
  it("should get single author", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const query = /* GraphQL */ `
      query Author($input: AuthorInput!) {
        author(input: $input) {
          id
          name
          nationality
        }
      }
    `;
    const input = {
      id: authors.testAuthor.id,
    };
    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });
    let author = result.data?.author as AuthorInstance;
    expect(author).toBeTruthy();
    expect(author.name).toBe(authors.testAuthor.name);
    expect(author.nationality).toBe(authors.testAuthor.nationality);
  });

  it("should throw error if author could not be found", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const query = /* GraphQL */ `
      query Author($input: AuthorInput!) {
        author(input: $input) {
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
      expect(result.errors[0].message).toBe("Author could not be found!");
  });
});
