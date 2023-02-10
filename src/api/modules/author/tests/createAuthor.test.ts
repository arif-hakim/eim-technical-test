import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { CreateAuthorPayload } from "../../../../generated/graphql";

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

const query = /* GraphQL */ `
  mutation createAuthor($input: CreateAuthorInput!) {
    createAuthor(input: $input) {
      author {
        id
        name
        nationality
      }
    }
  }
`;

describe("Create Author Mutation", () => {
  it("should create an author", async () => {
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

    let { author } = result.data?.createAuthor as CreateAuthorPayload;
    expect(author).toBeTruthy();
    expect(author.name).toBe(input.name);
    expect(author.nationality).toBe(input.nationality);
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
