import {GetMovieResponse} from '../../../utils/api/types';
import {
  MovieActionTypes,
  GetMovieBegin,
  GetMovieFailed,
  GetMovieSuccess,
} from './types';

export const getMovieBegin = (movieId: string): GetMovieBegin => ({
  type: MovieActionTypes.GET_MOVIE_BEGIN,
  payload: movieId,
});

export const getMovieSuccess = (
  payload: GetMovieResponse,
): GetMovieSuccess => ({
  type: MovieActionTypes.GET_MOVIE_SUCCESS,
  payload,
});

export const getMovieFailed = (errorMessage: string): GetMovieFailed => ({
  type: MovieActionTypes.GET_MOVIE_FAILED,
  payload: errorMessage,
});
