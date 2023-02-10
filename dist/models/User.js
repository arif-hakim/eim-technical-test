"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var database_1 = __importDefault(require("../database"));
var User = database_1["default"].define("User", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: sequelize_1.DataTypes.STRING,
    username: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING
}, {
    tableName: "users"
});
exports["default"] = User;
//# sourceMappingURL=User.js.map