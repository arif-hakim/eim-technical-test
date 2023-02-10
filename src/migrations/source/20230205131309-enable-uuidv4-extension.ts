import { QueryInterface, DataTypes, Sequelize } from "sequelize";

export = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    );
  },

  down: (queryInterface: QueryInterface) => {},
};
