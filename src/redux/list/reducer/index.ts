import {MovieListActionType, MovieListActionTypes} from '../actions/types';
import {MoviesReducerState} from './types';

const initialMovieListReducerState: MoviesReducerState = {
  movies: [],
  moviesListLoading: false,
  moviesSearch: '',
  movieListError: undefined,
};

export const movieListReducer = (
  state: MoviesReducerState = initialMovieListReducerState,
  action: MovieListActionType,
) => {
  let newState: MoviesReducerState;

  switch (action.type) {
    case MovieListActionTypes.GET_MOVIES_BEGIN:
      newState = {
        ...state,
        moviesListLoading: true,
      };

      delete newState.movieListError;

      return newState;

    case MovieListActionTypes.GET_MOVIES_SUCCESS:
      newState = {
        ...state,
        moviesListLoading: false,
        movies: action.payload.Search,
      };

      delete newState.movieListError;

      return newState;

    case MovieListActionTypes.GET_MOVIES_FAILED:
      newState = {
        ...state,
        moviesListLoading: false,
        movieListError: action.payload,
      };

      return newState;

    case MovieListActionTypes.UPDATE_MOVIES_SEARCH:
      newState = {
        ...state,
        moviesSearch: action.payload,
      };

      return newState;

    default:
      return state;
  }
};
