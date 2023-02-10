"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var database_1 = __importDefault(require("../database"));
var Actor = database_1["default"].define("Actor", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: sequelize_1.DataTypes.STRING,
    nationality: sequelize_1.DataTypes.STRING
}, {
    tableName: "actors"
});
exports["default"] = Actor;
//# sourceMappingURL=Actor.js.map