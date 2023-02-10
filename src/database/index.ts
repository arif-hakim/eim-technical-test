import { Sequelize } from "sequelize";
import { ServerConfig } from "../config";

const env = ServerConfig.NODE_ENV;
const logging = env === "test" ? false : true;
const dbConnectionString =
  env === "test"
    ? ServerConfig.DB_TESTING_CONNECTION_STRING
    : ServerConfig.DB_CONNECTION_STRING;

const sequelize = new Sequelize(dbConnectionString, {
  dialect: "postgres",
  logging,
});

export default sequelize;
