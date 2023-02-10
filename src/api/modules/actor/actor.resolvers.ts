import { ApolloError } from "apollo-server-express";
import { Context } from "../../../context";

export const actor = async (_: any, { input }: any, { db }: Context) => {
  const actor = await db.Actor.findOne({
    where: {
      id: input.id,
    },
  });
  if (!actor) throw new ApolloError("Actor could not be found!");
  return actor;
};

export const actors = async (_: any, __: any, { db }: Context) => {
  return db.Actor.findAll();
};

export const createActor = async (_: any, { input }: any, { db }: Context) => {
  const actor = await db.Actor.create({
    ...input,
  });
  return { actor: actor.toJSON() };
};

export const updateActor = async (_: any, { input }: any, { db }: Context) => {
  const { id, patch } = input;
  const actor = await db.Actor.findOne({
    where: {
      id,
    },
  });
  if (!actor) throw new Error("Actor could not be found.");

  await actor.update({ ...patch });
  await actor.reload();

  return { actor: actor.toJSON() };
};

export const deleteActor = async (_: any, { input }: any, { db }: Context) => {
  const actor = await db.Actor.findOne({
    where: {
      id: input.id,
    },
  });
  if (!actor) throw new Error("Actor could not be found.");

  await actor.destroy();
  return { id: input.id };
};
