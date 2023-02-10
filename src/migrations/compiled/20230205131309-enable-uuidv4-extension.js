"use strict";
module.exports = {
    up: function (queryInterface) {
        return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    },
    down: function (queryInterface) { }
};
