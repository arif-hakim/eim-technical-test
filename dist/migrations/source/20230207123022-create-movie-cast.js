"use strict";
var sequelize_1 = require("sequelize");
module.exports = {
    up: function (queryInterface) {
        return queryInterface.createTable("movie_casts", {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.Sequelize.fn("uuid_generate_v4")
            },
            movieId: {
                allowNull: false,
                type: sequelize_1.DataTypes.UUID,
                references: {
                    model: "movies",
                    key: "id"
                }
            },
            actorId: {
                allowNull: false,
                type: sequelize_1.DataTypes.UUID,
                references: {
                    model: "actors",
                    key: "id"
                }
            },
            castName: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            }
        }, {
            uniqueKeys: {
                actorMovie: {
                    fields: ["actorId", "movieId"]
                }
            }
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable("movie_casts");
    }
};
//# sourceMappingURL=20230207123022-create-movie-cast.js.map