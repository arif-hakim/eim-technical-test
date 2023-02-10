import { ApolloError } from "apollo-server-express";
import { Context } from "../../../context";

export const movieAuthor = async (movie: any, _: any, { db }: Context) => {
  const author = await db.Author.findOne({
    where: {
      id: movie.authorId,
    },
  });
  if (!author) throw new ApolloError("Author could not be found!");
  return author;
};

export const movieCasts = async (movie: any, _: any, { db }: Context) => {
  const movieCasts = await db.MovieCast.findAll({
    where: {
      movieId: movie.id,
    },
  });
  return movieCasts;
};

export const castMovie = async (movieCast: any, _: any, { db }: Context) => {
  const movie = await db.Movie.findOne({
    where: {
      id: movieCast.movieId,
    },
  });
  return movie;
};

export const castActor = async (movieCast: any, _: any, { db }: Context) => {
  const actor = await db.Actor.findOne({
    where: {
      id: movieCast.actorId,
    },
  });
  if (!actor) throw new ApolloError("Actor could not be found!");
  return actor;
};

export const movie = async (_: any, { input }: any, { db }: Context) => {
  const movie = await db.Movie.findOne({
    where: {
      id: input.id,
    },
  });
  if (!movie) throw new ApolloError("Movie could not be found!");
  return movie;
};

export const movies = async (_: any, __: any, { db }: Context) => {
  return db.Movie.findAll();
};

export const createMovie = async (_: any, { input }: any, { db }: Context) => {
  const movie = await db.Movie.create({
    ...input,
  });
  return { movie: movie.toJSON() };
};

export const addMovieCast = async (_: any, { input }: any, { db }: Context) => {
  const movieCast = await db.MovieCast.create({
    ...input,
  });
  return { movieCast: movieCast.toJSON() };
};

export const removeMovieCast = async (
  _: any,
  { input }: any,
  { db }: Context
) => {
  const movie = await db.MovieCast.findOne({
    where: {
      id: input.id,
    },
  });
  if (!movie) throw new Error("Movie cast could not be found.");

  await movie.destroy();
  return { id: input.id };
};

export const updateMovie = async (_: any, { input }: any, { db }: Context) => {
  const { id, patch } = input;
  const movie = await db.Movie.findOne({
    where: {
      id,
    },
  });
  if (!movie) throw new Error("Movie could not be found.");

  await movie.update({ ...patch });
  await movie.reload();

  return { movie: movie.toJSON() };
};

export const deleteMovie = async (_: any, { input }: any, { db }: Context) => {
  const movie = await db.Movie.findOne({
    where: {
      id: input.id,
    },
  });
  if (!movie) throw new Error("Movie could not be found.");

  await movie.destroy();
  return { id: input.id };
};
