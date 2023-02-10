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
exports.AuthorMutations = exports.AuthorQueries = exports.AuthorTypes = void 0;
var author_types_1 = require("./author.types");
__createBinding(exports, author_types_1, "default", "AuthorTypes");
var author_queries_1 = require("./author.queries");
__createBinding(exports, author_queries_1, "default", "AuthorQueries");
var author_mutations_1 = require("./author.mutations");
__createBinding(exports, author_mutations_1, "default", "AuthorMutations");
//# sourceMappingURL=author.interface.js.map