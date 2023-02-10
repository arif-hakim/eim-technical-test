import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { AddMovieCastPayload } from "../../../../generated/graphql";

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
  mutation addMovieCast($input: AddMovieCastInput!) {
    addMovieCast(input: $input) {
      movieCast {
        castName
        actor {
          id
          name
          nationality
        }
        movie {
          id
          title
        }
      }
    }
  }
`;

describe("Add Movie Cast Mutation", () => {
  it("should add a movie cast", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const input = {
      movieId: movies.testMovie.id,
      actorId: actors.testActor.id,
      castName: "Iron Man",
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

    let { movieCast } = result.data?.addMovieCast as AddMovieCastPayload;
    expect(movieCast).toBeTruthy();
    expect(movieCast.castName).toBe(input.castName);
    expect(movieCast.actor.id).toBe(input.actorId);
    expect(movieCast.actor.name).toBe(actors.testActor.name);
    expect(movieCast.movie.id).toBe(movies.testMovie.id);
    expect(movieCast.movie.title).toBe(movies.testMovie.title);

    // check in DB
    const movieCastsInDB = await db.MovieCast.findAll({
      where: {
        movieId: input.movieId,
      },
    });
    const exists = movieCastsInDB.find(
      ({ actorId }: any) => actorId === input.actorId
    );
    expect(exists).toBeTruthy();
  });
});
