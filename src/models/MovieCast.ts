import { DataTypes } from "sequelize";
import Actor from "../models/Actor";
import Movie from "../models/Movie";
import sequelize from "../database";

export interface MovieCastAttributes {
  id?: string;
  actorId?: string;
  movieId?: string;
  castName?: string;
}

export interface MovieCastInstance {
  id: string;
  actorId: string;
  movieId: string;
  castName: Date;
  createdAt: Date;
  updatedAt: Date;
}

const MovieCast = sequelize.define(
  "MovieCast",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    castName: DataTypes.STRING,
    actorId: {
      type: DataTypes.STRING,
      references: {
        model: Actor,
        key: "id",
      },
    },
    movieId: {
      type: DataTypes.STRING,
      references: {
        model: Movie,
        key: "id",
      },
    },
  },
  {
    tableName: "movie_casts",
  }
);

export default MovieCast;
