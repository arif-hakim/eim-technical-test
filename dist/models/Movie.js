"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var Author_1 = __importDefault(require("../models/Author"));
var database_1 = __importDefault(require("../database"));
var Movie = database_1["default"].define("Movie", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    title: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    minutes: sequelize_1.DataTypes.STRING,
    authorId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: Author_1["default"],
            key: "id"
        }
    }
}, {
    tableName: "movies"
});
exports["default"] = Movie;
//# sourceMappingURL=Movie.js.map