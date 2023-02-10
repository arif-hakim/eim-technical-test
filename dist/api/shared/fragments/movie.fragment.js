"use strict";
exports.__esModule = true;
exports.MOVIE_FIELDS = void 0;
var author_fragment_1 = require("./author.fragment");
var cast_fragment_1 = require("./cast.fragment");
exports.MOVIE_FIELDS = "\n  fragment MovieFields on Movie {\n    id\n    title\n    description\n    duration\n    author {\n      ...AuthorFields\n    }\n    casts {\n      ...CastFields\n    }\n  }\n  ".concat(author_fragment_1.AUTHOR_FIELDS, "\n  ").concat(cast_fragment_1.CAST_FIELDS, "\n");
//# sourceMappingURL=movie.fragment.js.map