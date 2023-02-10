import { ApolloError } from "apollo-server-express";
import { Context } from "../../../context";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ServerConfig } from "../../../config";

export const signIn = async (_: any, { input }: any, { db }: Context) => {
  const { username, password } = input;
  const user = await db.User.findOne({
    where: {
      username,
    },
  });
  if (!user) throw new ApolloError("Username does not match with any account.");

  const isPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) throw new ApolloError("Password does not match.");

  const timestamp = Date.now();

  const token = jwt.sign({ id: user.id, timestamp }, ServerConfig.JWT_SECRET);
  return { token };
};
