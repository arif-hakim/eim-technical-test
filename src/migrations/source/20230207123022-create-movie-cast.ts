import { QueryInterface, Sequelize, DataTypes } from "sequelize";

export = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable(
      "movie_casts",
      {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: Sequelize.fn("uuid_generate_v4"),
        },

        movieId: {
          allowNull: false,
          type: DataTypes.UUID,
          references: {
            model: "movies",
            key: "id",
          },
        },

        actorId: {
          allowNull: false,
          type: DataTypes.UUID,
          references: {
            model: "actors",
            key: "id",
          },
        },

        castName: {
          allowNull: false,
          type: DataTypes.STRING,
        },

        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },

        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      },
      {
        uniqueKeys: {
          actorMovie: {
            fields: ["actorId", "movieId"],
          },
        },
      }
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("movie_casts");
  },
};
