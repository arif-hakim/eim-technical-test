import { DataTypes } from "sequelize";
import Author from "../models/Author";
import sequelize from "../database";

export interface MovieAttributes {
  id?: string;
  title?: string;
  description?: string;
  minutes?: string;
  authorId?: string;
}

export interface MovieInstance {
  id: string;
  title: string;
  description: string;
  minutes: Date;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Movie = sequelize.define(
  "Movie",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    minutes: DataTypes.STRING,
    authorId: {
      type: DataTypes.STRING,
      references: {
        model: Author,
        key: "id",
      },
    },
  },
  {
    tableName: "movies",
  }
);

export default Movie;
