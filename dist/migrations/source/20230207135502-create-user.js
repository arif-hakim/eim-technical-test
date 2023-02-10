"use strict";
var sequelize_1 = require("sequelize");
module.exports = {
    up: function (queryInterface) {
        return queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.Sequelize.fn("uuid_generate_v4")
            },
            username: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            },
            password: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING
            },
            name: {
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
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable("users");
    }
};
//# sourceMappingURL=20230207135502-create-user.js.map