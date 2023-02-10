import { QueryInterface, DataTypes, Sequelize } from "sequelize";

export = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("movies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.fn("uuid_generate_v4"),
        autoIncrement: false,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      minutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      authorId: {
        type: DataTypes.UUID,
        references: {
          model: "authors",
          key: "id",
        },
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("movies");
  },
};
