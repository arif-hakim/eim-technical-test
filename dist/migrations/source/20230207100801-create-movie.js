"use strict";
var sequelize_1 = require("sequelize");
module.exports = {
    up: function (queryInterface) {
        return queryInterface.createTable("movies", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.Sequelize.fn("uuid_generate_v4"),
                autoIncrement: false
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            minutes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            authorId: {
                type: sequelize_1.DataTypes.UUID,
                references: {
                    model: "authors",
                    key: "id"
                }
            },
            createdAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            }
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable("movies");
    }
};
//# sourceMappingURL=20230207100801-create-movie.js.map