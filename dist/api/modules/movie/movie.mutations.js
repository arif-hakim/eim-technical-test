"use strict";
exports.__esModule = true;
var movie_resolvers_1 = require("./movie.resolvers");
exports["default"] = {
    Mutation: {
        createMovie: movie_resolvers_1.createMovie,
        updateMovie: movie_resolvers_1.updateMovie,
        deleteMovie: movie_resolvers_1.deleteMovie,
        addMovieCast: movie_resolvers_1.addMovieCast,
        removeMovieCast: movie_resolvers_1.removeMovieCast
    }
};
//# sourceMappingURL=movie.mutations.js.map