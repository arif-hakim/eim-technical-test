import db from "../models";
import { MovieInstance } from "../models/Movie";

const seed = async (input: any) => {
  try {
    const result = await db.Movie.create({ ...input });
    return result.toJSON();
  } catch (err: any) {
    throw new Error("Failed seeding movie. Error: ", err.message);
  }
};

export interface DummyMovies {
  testMovie: MovieInstance;
  testSecondMovie: MovieInstance;
  testThirdMovie: MovieInstance;
}

export const seedMovies = async ({ authors }: any) => {
  return {
    testMovie: await seed({
      title: "The Avengers",
      description: "Lorem ipsum dolor sit amet.",
      minutes: 200,
      authorId: authors.testAuthor.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testSecondMovie: await seed({
      title: "Winter Soldier",
      description: "Lorem ipsum dolor sit amet.",
      minutes: 180,
      authorId: authors.testAuthor.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testThirdMovie: await seed({
      title: "The Conjuring",
      description: "Lorem ipsum dolor sit amet.",
      minutes: 210,
      authorId: authors.testSecondAuthor.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  };
};
