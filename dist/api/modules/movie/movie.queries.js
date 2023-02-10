"use strict";
exports.__esModule = true;
var movie_resolvers_1 = require("./movie.resolvers");
exports["default"] = {
    Query: {
        movie: movie_resolvers_1.movie,
        movies: movie_resolvers_1.movies
    },
    Movie: {
        author: movie_resolvers_1.movieAuthor,
        casts: movie_resolvers_1.movieCasts
    },
    MovieCast: {
        actor: movie_resolvers_1.castActor,
        movie: movie_resolvers_1.castMovie
    }
};
//# sourceMappingURL=movie.queries.js.map