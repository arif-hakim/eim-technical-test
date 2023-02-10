import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { Movie } from "../../../../generated/graphql";
import { v4 as uuidv4 } from "uuid";

import { DummyMovies, seedMovies } from "../../../../seeders/movie.seeder";
import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { DummyAuthors, seedAuthors } from "../../../../seeders/author.seeder";
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
  query Movie($input: MovieInput!) {
    movie(input: $input) {
      id
      title
      description
      minutes
      author {
        id
      }
    }
  }
`;

describe("Movie Query", () => {
  it("should get single movie", async () => {
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
    let movie = result.data?.movie as Movie;
    expect(movie).toBeTruthy();
    expect(movie.title).toBe(movies.testMovie.title);
    expect(movie.description).toBe(movies.testMovie.description);
    expect(movie.minutes).toBe(movies.testMovie.minutes);
    expect(movie.author.id).toBe(movies.testMovie.authorId);
  });

  it("should throw error if movie could not be found", async () => {
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
      expect(result.errors[0].message).toBe("Movie could not be found!");
  });
});
