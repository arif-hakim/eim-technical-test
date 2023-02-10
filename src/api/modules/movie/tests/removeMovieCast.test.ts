import db from "../../../../models";
import schema from "../../../schema";
import { graphql, ExecutionResult } from "graphql";
import { RemoveMovieCastPayload } from "../../../../generated/graphql";
import { v4 as uuidv4 } from "uuid";

import { resetDatabase } from "../../../../testing/dbHelper";
import { DummyUsers, seedUsers } from "../../../../seeders/user.seeder";
import { DummyActors, seedActors } from "../../../../seeders/actor.seeder";
import { DummyAuthors, seedAuthors } from "../../../../seeders/author.seeder";
import { DummyMovies, seedMovies } from "../../../../seeders/movie.seeder";
import {
  DummyMovieCasts,
  seedMovieCasts,
} from "../../../../seeders/movieCast.seeder";

let users: DummyUsers;
let actors: DummyActors;
let authors: DummyAuthors;
let movies: DummyMovies;
let movieCasts: DummyMovieCasts;

beforeAll(async () => {
  users = await seedUsers();
  actors = await seedActors();
  authors = await seedAuthors();
  movies = await seedMovies({ authors });
  movieCasts = await seedMovieCasts({ actors, movies });
});

afterAll(async () => {
  await resetDatabase();
  await db.sequelize.close();
});

const query = /* GraphQL */ `
  mutation removeMovieCast($input: RemoveMovieCastInput!) {
    removeMovieCast(input: $input) {
      id
    }
  }
`;

describe("Remove Movie Cast Mutation", () => {
  it("should remove a movie cast", async () => {
    const contextValue = {
      db,
      user: users.testUser,
    };
    const input = {
      id: movieCasts.testMovieCast.id,
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

    let { id } = result.data?.removeMovieCast as RemoveMovieCastPayload;
    expect(id).toBe(input.id);

    // check in DB
    const movieCastsInDB = await db.MovieCast.findAll({
      where: {
        movieId: movieCasts.testMovieCast.movieId,
      },
    });
    const exists = movieCastsInDB.find(({ id }: any) => id === input.id);
    expect(exists).toBeFalsy();
  });
});
