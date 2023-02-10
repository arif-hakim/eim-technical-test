"use strict";
exports.__esModule = true;
var author_resolvers_1 = require("./author.resolvers");
exports["default"] = {
    Mutation: {
        createAuthor: author_resolvers_1.createAuthor,
        updateAuthor: author_resolvers_1.updateAuthor,
        deleteAuthor: author_resolvers_1.deleteAuthor
    }
};
//# sourceMappingURL=author.mutations.js.map