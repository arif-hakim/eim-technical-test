import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { Movie } from "../../../../generated/graphql";

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

describe("Movies Query", () => {
  it("should get all movies", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const query = /* GraphQL */ `
      query Movies {
        movies {
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
    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
    });
    let movieResults = result.data?.movies as Array<Movie>;
    const firstMovie = movieResults.find(
      ({ id }) => id === movies.testMovie.id
    );
    expect(firstMovie).toBeTruthy();
    expect(firstMovie?.title).toBe(movies.testMovie.title);
    expect(firstMovie?.description).toBe(movies.testMovie.description);
    expect(firstMovie?.minutes).toBe(movies.testMovie.minutes);
    expect(firstMovie?.author.id).toBe(movies.testMovie.authorId);

    const secondMovie = movieResults.find(
      ({ id }) => id === movies.testSecondMovie.id
    );
    expect(secondMovie).toBeTruthy();
    expect(secondMovie?.title).toBe(movies.testSecondMovie.title);
    expect(secondMovie?.description).toBe(movies.testSecondMovie.description);
    expect(secondMovie?.minutes).toBe(movies.testSecondMovie.minutes);
    expect(secondMovie?.author.id).toBe(movies.testSecondMovie.authorId);
  });
});
