import {GetMoviesResponse} from '../../../utils/api/types';
import {
  MovieListActionTypes,
  GetMoviesBegin,
  GetMoviesSuccess,
  GetMoviesFailed,
  UpdateMoviesSearch,
} from './types';

export const getMoviesBegin = (search?: string): GetMoviesBegin => ({
  type: MovieListActionTypes.GET_MOVIES_BEGIN,
  payload: search,
});

export const getMoviesSuccess = (
  payload: GetMoviesResponse,
): GetMoviesSuccess => ({
  type: MovieListActionTypes.GET_MOVIES_SUCCESS,
  payload,
});

export const getMoviesFailed = (errorMessage: string): GetMoviesFailed => ({
  type: MovieListActionTypes.GET_MOVIES_FAILED,
  payload: errorMessage,
});

export const updateMoviesSearch = (searchText: string): UpdateMoviesSearch => ({
  type: MovieListActionTypes.UPDATE_MOVIES_SEARCH,
  payload: searchText,
});
