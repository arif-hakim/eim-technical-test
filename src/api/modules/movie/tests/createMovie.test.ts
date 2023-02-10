import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { CreateMoviePayload } from "../../../../generated/graphql";

import { DummyMovies, seedMovies } from "../../../../seeders/movie.seeder";
import { DummyAuthors, seedAuthors } from "../../../../seeders/author.seeder";
import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { resetDatabase } from "../../../../testing/dbHelper";
import { v4 as uuidv4 } from "uuid";

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
  mutation createMovie($input: CreateMovieInput!) {
    createMovie(input: $input) {
      movie {
        id
        title
        description
        minutes
        author {
          id
          name
          nationality
        }
      }
    }
  }
`;

describe("Create Movie Mutation", () => {
  it("should create a movie", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      title: "The Dark Knight",
      description: "Lorem ipsum dolor sit amet.",
      minutes: 189,
      authorId: authors.testSecondAuthor.id,
    };

    const result: ExecutionResult = await graphql({
      schema: schema,
      source: query,
      contextValue,
      variableValues: {
        input,
      },
    });

    let { movie } = result.data?.createMovie as CreateMoviePayload;
    expect(movie).toBeTruthy();
    expect(movie.title).toBe(input.title);
    expect(movie.description).toBe(input.description);
    expect(movie.minutes).toBe(input.minutes);
    expect(movie.author.id).toBe(authors.testSecondAuthor.id);
    expect(movie.author.name).toBe(authors.testSecondAuthor.name);
    expect(movie.author.nationality).toBe(authors.testSecondAuthor.nationality);
  });
});
