import { ApolloError } from "apollo-server-express";
import { Context } from "../../../context";

export const author = async (_: any, { input }: any, { db }: Context) => {
  const author = await db.Author.findOne({
    where: {
      id: input.id,
    },
  });
  if (!author) throw new ApolloError("Author could not be found!");
  return author;
};

export const authors = async (_: any, __: any, { db }: Context) => {
  return db.Author.findAll();
};

export const createAuthor = async (_: any, { input }: any, { db }: Context) => {
  const author = await db.Author.create({
    ...input,
  });
  return { author: author.toJSON() };
};

export const updateAuthor = async (_: any, { input }: any, { db }: Context) => {
  const { id, patch } = input;
  const author = await db.Author.findOne({
    where: {
      id,
    },
  });
  if (!author) throw new Error("Author could not be found.");

  await author.update({ ...patch });
  await author.reload();

  return { author: author.toJSON() };
};

export const deleteAuthor = async (_: any, { input }: any, { db }: Context) => {
  const author = await db.Author.findOne({
    where: {
      id: input.id,
    },
  });
  if (!author) throw new Error("Author could not be found.");

  await author.destroy();
  return { id: input.id };
};
