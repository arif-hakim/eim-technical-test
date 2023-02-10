import { hashSync } from "bcryptjs";
import db from "../models";
import { UserInstance } from "../models/User";

const hashPassword = (password: string) => {
  return hashSync(password);
};

const seed = async (input: any) => {
  try {
    const result = await db.User.create({ ...input });
    return result.toJSON();
  } catch (err: any) {
    throw new Error("Failed seeding user. Error: ", err.message);
  }
};

export interface DummyUsers {
  testUser: UserInstance;
  testSecondUser: UserInstance;
}

export const seedUsers = async () => {
  return {
    testUser: await seed({
      name: "Admin",
      username: "admin",
      password: hashPassword("Admin1234!@#$"),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
    testSecondUser: await seed({
      name: "Admin 2",
      username: "admin-2",
      password: hashPassword("Admin1234!@#$"),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  };
};
