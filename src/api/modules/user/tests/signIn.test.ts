import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { SignInPayload } from "../../../../generated/graphql";

import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { resetDatabase } from "../../../../testing/dbHelper";

let users: DummyUsers;

beforeAll(async () => {
  users = await seedUsers();
});

afterAll(async () => {
  await resetDatabase();
  await db.sequelize.close();
});

const query = /* GraphQL */ `
  mutation signIn($input: SignInInput!) {
    signIn(input: $input) {
      token
    }
  }
`;

describe("Sign In Mutation", () => {
  it("should be able to sign in and generate auth token", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      username: "admin",
      password: "Admin1234!@#$",
    };

    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });

    expect(result.errors).toBeUndefined();

    let { token } = result.data?.signIn as SignInPayload;
    expect(token).toBeTruthy();
  });

  it("should throw error if username is invalid", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      username: "my-user",
      password: "Admin1234!@#$",
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
          "Username does not match with any account."
        )
      ).toBeTruthy();
  });

  it("should throw error if password is invalid", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      username: "admin",
      password: "user1234!@#$",
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
        result.errors[0].message.includes("Password does not match.")
      ).toBeTruthy();
  });
});
