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
exports.ActorMutations = exports.ActorQueries = exports.ActorTypes = void 0;
var actor_types_1 = require("./actor.types");
__createBinding(exports, actor_types_1, "default", "ActorTypes");
var actor_queries_1 = require("./actor.queries");
__createBinding(exports, actor_queries_1, "default", "ActorQueries");
var actor_mutations_1 = require("./actor.mutations");
__createBinding(exports, actor_mutations_1, "default", "ActorMutations");
//# sourceMappingURL=actor.interface.js.map