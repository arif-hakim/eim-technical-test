import {
  movie,
  movies,
  movieAuthor,
  castActor,
  castMovie,
  movieCasts,
} from "./movie.resolvers";

export default {
  Query: {
    movie,
    movies,
  },
  Movie: {
    author: movieAuthor,
    casts: movieCasts,
  },
  MovieCast: {
    actor: castActor,
    movie: castMovie,
  },
};
