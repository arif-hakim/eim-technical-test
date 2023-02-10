import {
  createMovie,
  updateMovie,
  deleteMovie,
  addMovieCast,
  removeMovieCast,
} from "./movie.resolvers";

export default {
  Mutation: {
    createMovie,
    updateMovie,
    deleteMovie,
    addMovieCast,
    removeMovieCast,
  },
};
