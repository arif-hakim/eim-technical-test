import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { UpdateMoviePayload } from "../../../../generated/graphql";
import { v4 as uuidv4 } from "uuid";

import { DummyMovies, seedMovies } from "../../../../seeders/movie.seeder";
import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { DummyActors, seedActors } from "../../../../seeders/actor.seeder";
import { resetDatabase } from "../../../../testing/dbHelper";
import { DummyAuthors, seedAuthors } from "../../../../seeders/author.seeder";

let movies: DummyMovies;
let users: DummyUsers;
let actors: DummyActors;
let authors: DummyAuthors;

beforeAll(async () => {
  users = await seedUsers();
  actors = await seedActors();
  authors = await seedAuthors();
  movies = await seedMovies({ authors });
});

afterAll(async () => {
  await resetDatabase();
  await db.sequelize.close();
});

const query = /* GraphQL */ `
  mutation updateMovie($input: UpdateMovieInput!) {
    updateMovie(input: $input) {
      movie {
        id
        title
        description
        minutes
        author {
          id
        }
      }
    }
  }
`;

describe("Update Movie Mutation", () => {
  it("should update an movie", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const input = {
      id: movies.testMovie.id,
      patch: {
        title: "Sherlock Holmes",
        description: "Sequel of first edition of Sherlock Holmes",
        minutes: 150,
        authorId: authors.testSecondAuthor.id,
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

    let { movie } = result.data?.updateMovie as UpdateMoviePayload;
    expect(movie).toBeTruthy();
    expect(movie.id).toBe(input.id);
    expect(movie.title).toBe(input.patch.title);
    expect(movie.description).toBe(input.patch.description);
    expect(movie.minutes).toBe(input.patch.minutes);
    expect(movie.author.id).toBe(input.patch.authorId);
  });

  it("should throw error not found if id is invalid", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };

    const input = {
      id: uuidv4(),
      patch: {
        title: "Sherlock Holmes",
        description: "Sequel of first edition of Sherlock Holmes",
        minutes: 150,
        authorId: authors.testSecondAuthor.id,
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
      expect(result.errors[0].message).toBe("Movie could not be found.");
  });
});
