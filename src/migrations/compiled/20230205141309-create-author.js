"use strict";
var sequelize_1 = require("sequelize");
module.exports = {
    up: function (queryInterface) {
        return queryInterface.createTable("authors", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.Sequelize.fn("uuid_generate_v4")
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            nationality: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
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
        return queryInterface.dropTable("authors");
    }
};
