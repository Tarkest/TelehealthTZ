import {MovieActionTypes, MovieActionType} from '../actions/types';
import {MovieReducerState} from './types';

const initialMovieReducerState: MovieReducerState = {
  movie: undefined,
  movieLoading: false,
  movieGetError: undefined,
};

export const movieReducer = (
  state: MovieReducerState = initialMovieReducerState,
  action: MovieActionType,
) => {
  let newState: MovieReducerState;

  switch (action.type) {
    case MovieActionTypes.GET_MOVIE_BEGIN:
      newState = {
        ...state,
        movieLoading: true,
      };

      delete newState.movieGetError;

      return newState;

    case MovieActionTypes.GET_MOVIE_SUCCESS:
      newState = {
        ...state,
        movieLoading: false,
        movie: action.payload,
      };

      delete newState.movieGetError;

      return newState;

    case MovieActionTypes.GET_MOVIE_FAILED:
      newState = {
        ...state,
        movieGetError: action.payload,
      };

      return newState;

    default:
      return state;
  }
};
