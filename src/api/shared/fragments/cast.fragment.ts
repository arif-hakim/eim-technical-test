import { ACTOR_FIELDS } from "./actor.fragment";

export const CAST_FIELDS = /* GraphQL */ `
  fragment CastFields on Cast {
    id
    actor {
      ...ActorFields
    }
    castName
  }
  ${ACTOR_FIELDS}
`;
