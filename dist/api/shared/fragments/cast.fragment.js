"use strict";
exports.__esModule = true;
exports.CAST_FIELDS = void 0;
var actor_fragment_1 = require("./actor.fragment");
exports.CAST_FIELDS = "\n  fragment CastFields on Cast {\n    id\n    actor {\n      ...ActorFields\n    }\n    castName\n  }\n  ".concat(actor_fragment_1.ACTOR_FIELDS, "\n");
//# sourceMappingURL=cast.fragment.js.map