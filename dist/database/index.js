"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var config_1 = require("../config");
var config = require("../config/config.json")[config_1.ServerConfig.NODE_ENV];
var logging = config_1.ServerConfig.NODE_ENV === "test" ? false : true;
var sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: logging
});
exports["default"] = sequelize;
//# sourceMappingURL=index.js.map