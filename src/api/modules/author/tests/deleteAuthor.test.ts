import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { DeleteAuthorPayload } from "../../../../generated/graphql";
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
  mutation deleteAuthor($input: DeleteAuthorInput!) {
    deleteAuthor(input: $input) {
      id
    }
  }
`;

describe("Delete Author Mutation", () => {
  it("should delete an author", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

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

    let { id } = result.data?.deleteAuthor as DeleteAuthorPayload;
    expect(id).toBe(input.id);

    // check in db
    const deletedAuthor = await db.Author.findOne({
      where: {
        id: authors.testAuthor.id,
      },
    });
    expect(deletedAuthor).toBeNull();
  });

  it("should throw error if id is invalid", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

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

    expect(result.errors).toHaveLength(1);
    if (result.errors)
      expect(result.errors[0].message).toBe("Author could not be found.");
  });
});
