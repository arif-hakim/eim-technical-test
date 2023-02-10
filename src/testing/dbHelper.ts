import db from "../models";

export const resetDatabase = async () => {
  await db.MovieCast.destroy({
    where: {},
  });
  await db.Movie.destroy({
    where: {},
  });
  await db.Actor.destroy({
    where: {},
  });
  await db.Author.destroy({
    where: {},
  });
  await db.User.destroy({
    where: {},
  });
};
