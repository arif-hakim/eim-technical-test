import db from "../models";
import { AuthorInstance } from "../models/Author";

const seed = async (input: any) => {
  try {
    const result = await db.Author.create({ ...input });
    return result.toJSON();
  } catch (err: any) {
    throw new Error("Failed seeding author. Error: ", err.message);
  }
};

export interface DummyAuthors {
  testAuthor: AuthorInstance;
  testSecondAuthor: AuthorInstance;
}

export const seedAuthors = async () => {
  return {
    testAuthor: await seed({
      name: "John Doe",
      nationality: "England",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testSecondAuthor: await seed({
      name: "Romanoff Doe",
      nationality: "Italy",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  };
};
