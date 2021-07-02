import {MovieListActionType, MovieListActionTypes} from '../actions/types';
import {MovieReducerState} from './types';

const initialMovieListReducerState: MovieReducerState = {
  movies: [],
  moviesListLoading: false,
  moviesSearch: '',
  movieListError: '',
};

export const movieListReducer = (
  state: MovieReducerState = initialMovieListReducerState,
  action: MovieListActionType,
) => {
  let newState: MovieReducerState;

  switch (action.type) {
    case MovieListActionTypes.GET_MOVIES_BEGIN:
      newState = {
        ...state,
        moviesListLoading: true,
      };

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
