import { Sequelize } from "sequelize";
import { ServerConfig } from "../config";

const config = require("../config/config.json")[ServerConfig.NODE_ENV];

const logging = ServerConfig.NODE_ENV === "test" ? false : true;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging,
  }
);

export default sequelize;
