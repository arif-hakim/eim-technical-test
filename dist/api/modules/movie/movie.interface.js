"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.MovieMutations = exports.MovieQueries = exports.MovieTypes = void 0;
var movie_types_1 = require("./movie.types");
__createBinding(exports, movie_types_1, "default", "MovieTypes");
var movie_queries_1 = require("./movie.queries");
__createBinding(exports, movie_queries_1, "default", "MovieQueries");
var movie_mutations_1 = require("./movie.mutations");
__createBinding(exports, movie_mutations_1, "default", "MovieMutations");
//# sourceMappingURL=movie.interface.js.map