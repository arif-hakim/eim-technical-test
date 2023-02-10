import { AUTHOR_FIELDS } from "./author.fragment";
import { CAST_FIELDS } from "./cast.fragment";

export const MOVIE_FIELDS = /* GraphQL */ `
  fragment MovieFields on Movie {
    id
    title
    description
    duration
    author {
      ...AuthorFields
    }
    casts {
      ...CastFields
    }
  }
  ${AUTHOR_FIELDS}
  ${CAST_FIELDS}
`;
