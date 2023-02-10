"use strict";
exports.__esModule = true;
var author_resolvers_1 = require("./author.resolvers");
exports["default"] = {
    Query: {
        author: author_resolvers_1.author,
        authors: author_resolvers_1.authors
    }
};
//# sourceMappingURL=author.queries.js.map