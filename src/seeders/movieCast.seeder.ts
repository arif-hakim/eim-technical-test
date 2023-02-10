import db from "../models";
import { MovieCastInstance } from "../models/MovieCast";

const seed = async (input: any) => {
  try {
    const result = await db.MovieCast.create({ ...input });
    return result.toJSON();
  } catch (err: any) {
    throw new Error("Failed seeding movie cast. Error: ", err.message);
  }
};

export interface DummyMovieCasts {
  testMovieCast: MovieCastInstance;
  testSecondMovieCast: MovieCastInstance;
  testThirdMovieCast: MovieCastInstance;
  testFourthMovieCast: MovieCastInstance;
}

export const seedMovieCasts = async ({ actors, movies }: any) => {
  return {
    testMovieCast: await seed({
      movieId: movies.testMovie.id,
      actorId: actors.testActor.id,
      castName: "Spiderman",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testSecondMovieCast: await seed({
      movieId: movies.testMovie.id,
      actorId: actors.testSecondActor.id,
      castName: "Iron Man",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testThirdMovieCast: await seed({
      movieId: movies.testSecondMovie.id,
      actorId: actors.testActor.id,
      castName: "Mr. One",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testFourthMovieCast: await seed({
      movieId: movies.testThirdMovie.id,
      actorId: actors.testSecondActor.id,
      castName: "The Wizard",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  };
};
