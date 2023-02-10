"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var sequelize_1 = require("sequelize");
var basename = path_1["default"].basename(__filename);
var db = {};
var database_1 = __importDefault(require("../database"));
fs_1["default"].readdirSync(__dirname)
    .filter(function (file) {
    return (file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts");
})
    .forEach(function (file) {
    var model = require(path_1["default"].join(__dirname, file));
    var modelName = file.replace(".ts", "");
    db[modelName] = model["default"];
});
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = database_1["default"];
db.Sequelize = sequelize_1.Sequelize;
exports["default"] = db;
//# sourceMappingURL=index.js.map