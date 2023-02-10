import { DataTypes } from "sequelize";
import sequelize from "../database";

export interface ActorAttributes {
  id?: string;
  name?: string;
  nationality?: string;
}

export interface ActorInstance {
  id: string;
  name: string;
  nationality: string;
  createdAt: Date;
  updatedAt: Date;
}

const Actor = sequelize.define(
  "Actor",
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
    tableName: "actors",
  }
);

export default Actor;
