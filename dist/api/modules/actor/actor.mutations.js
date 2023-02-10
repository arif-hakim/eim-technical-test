"use strict";
exports.__esModule = true;
var actor_resolvers_1 = require("./actor.resolvers");
exports["default"] = {
    Mutation: {
        createActor: actor_resolvers_1.createActor,
        updateActor: actor_resolvers_1.updateActor,
        deleteActor: actor_resolvers_1.deleteActor
    }
};
//# sourceMappingURL=actor.mutations.js.map