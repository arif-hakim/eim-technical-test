import { DataTypes } from "sequelize";
import sequelize from "../database";

export interface UserAttributes {
  id?: string;
  name?: string;
  username?: string;
  password?: string;
}

export interface UserInstance {
  id: string;
  name: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    tableName: "users",
  }
);

export default User;
