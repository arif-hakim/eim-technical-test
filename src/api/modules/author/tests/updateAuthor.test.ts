import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { UpdateAuthorPayload } from "../../../../generated/graphql";
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

const query = /* GraphQL */ `
  mutation updateAuthor($input: UpdateAuthorInput!) {
    updateAuthor(input: $input) {
      author {
        id
        name
        nationality
      }
    }
  }
`;

describe("Update Author Mutation", () => {
  it("should update an author", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      id: authors.testAuthor.id,
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

    let { author } = result.data?.updateAuthor as UpdateAuthorPayload;
    expect(author).toBeTruthy();
    expect(author.id).toBe(input.id);
    expect(author.name).toBe(input.patch.name);
    expect(author.nationality).toBe(input.patch.nationality);
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
      expect(result.errors[0].message).toBe("Author could not be found.");
  });
});
