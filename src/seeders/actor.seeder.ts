import db from "../models";
import { ActorInstance } from "../models/Actor";

const seed = async (input: any) => {
  try {
    const result = await db.Actor.create({ ...input });
    return result.toJSON();
  } catch (err: any) {
    throw new Error("Failed seeding actor. Error: ", err.message);
  }
};

export interface DummyActors {
  testActor: ActorInstance;
  testSecondActor: ActorInstance;
}

export const seedActors = async () => {
  return {
    testActor: await seed({
      name: "Tom Holland",
      nationality: "England",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testSecondActor: await seed({
      name: "Tom Hanks",
      nationality: "England",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  };
};
