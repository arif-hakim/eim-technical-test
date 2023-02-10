"use strict";
module.exports = {
    up: function (queryInterface) {
        return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    },
    down: function (queryInterface) { }
};
//# sourceMappingURL=20230205131309-enable-uuidv4-extension.js.map