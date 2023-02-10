import { DataTypes } from "sequelize";
import sequelize from "../database";

export interface AuthorAttributes {
  id?: string;
  name?: string;
  nationality?: string;
}

export interface AuthorInstance {
  id: string;
  name: string;
  nationality: string;
  createdAt: Date;
  updatedAt: Date;
}

const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    nationality: DataTypes.STRING,
  },
  {
    tableName: "authors",
  }
);

export default Author;
