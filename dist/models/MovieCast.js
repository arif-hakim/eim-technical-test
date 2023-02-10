"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var Actor_1 = __importDefault(require("../models/Actor"));
var Movie_1 = __importDefault(require("../models/Movie"));
var database_1 = __importDefault(require("../database"));
var MovieCast = database_1["default"].define("MovieCast", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    castName: sequelize_1.DataTypes.STRING,
    actorId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: Actor_1["default"],
            key: "id"
        }
    },
    movieId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: Movie_1["default"],
            key: "id"
        }
    }
}, {
    tableName: "movie_casts"
});
exports["default"] = MovieCast;
//# sourceMappingURL=MovieCast.js.map