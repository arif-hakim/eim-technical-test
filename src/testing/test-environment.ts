// inspired by: https://github.com/ctrlplusb/prisma-pg-jest/blob/master/prisma/prisma-test-environment.js

/* eslint-disable import/no-extraneous-dependencies */
import util from "util";
import { Client } from "pg";
import db from "../models";
const exec = util.promisify(require("child_process").exec);

import NodeEnvironment from "jest-environment-node";
import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from "@jest/environment";

import { v4 as uuidv4 } from "uuid";
/**
 * Custom test environment for Prisma and Postgres
 */
class PrismaTestEnvironment extends NodeEnvironment {
  schema: string;
  databaseUrl: string;

  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context);

    // Generate a unique schema identifier for this test context
    this.schema = `test_${uuidv4()}`;

    // Generate the pg connection string for the test schema
    this.databaseUrl = `${process.env.DB_TESTING_CONNECTION_STRING}`;

    // in case the connection string contains a connection_limit parameter
    // e.g.: <DATABSE_URL>?connection_limit=10
    if (this.databaseUrl.includes("?")) {
      this.databaseUrl += `&schema=${this.schema}`;
    } else {
      this.databaseUrl += `?schema=${this.schema}`;
    }
  }

  async setup() {
    // Set the required environment variable to contain the connection string
    // to our database test schema
    process.env.DB_CONNECTION_STRING = this.databaseUrl;
    this.global.process.env.DB_CONNECTION_STRING = this.databaseUrl;

    return super.setup();
  }

  async teardown() {
    // Drop the schema after the tests have completed
    const client = new Client({
      connectionString: this.databaseUrl,
    });
    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}

export default PrismaTestEnvironment;
