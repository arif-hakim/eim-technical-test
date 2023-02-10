import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { DeleteMoviePayload } from "../../../../generated/graphql";
import { v4 as uuidv4 } from "uuid";

import { DummyMovies, seedMovies } from "../../../../seeders/movie.seeder";
import { DummyAuthors, seedAuthors } from "../../../../seeders/author.seeder";
import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { resetDatabase } from "../../../../testing/dbHelper";

let movies: DummyMovies;
let users: DummyUsers;
let authors: DummyAuthors;

beforeAll(async () => {
  users = await seedUsers();
  authors = await seedAuthors();
  movies = await seedMovies({ authors });
});

afterAll(async () => {
  await resetDatabase();
  await db.sequelize.close();
});

const query = /* GraphQL */ `
  mutation deleteMovie($input: DeleteMovieInput!) {
    deleteMovie(input: $input) {
      id
    }
  }
`;

describe("Delete Movie Mutation", () => {
  it("should delete an movie", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      id: movies.testMovie.id,
    };

    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });

    let { id } = result.data?.deleteMovie as DeleteMoviePayload;
    expect(id).toBe(input.id);

    // check in db
    const deletedMovie = await db.Movie.findOne({
      where: {
        id: movies.testMovie.id,
      },
    });
    expect(deletedMovie).toBeNull();
  });

  it("should throw error if id is invalid", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

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
      expect(result.errors[0].message).toBe("Movie could not be found.");
  });
});
