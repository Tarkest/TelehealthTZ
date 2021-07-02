import {GetMovieResponse} from '../../../utils/api/types';
import {AnyAction} from 'redux';

export enum MovieActionTypes {
  GET_MOVIE_BEGIN = 'GET_MOVIE_BEGIN',
  GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS',
  GET_MOVIE_FAILED = 'GET_MOVIE_FAILED',
}

export interface GetMovieBegin extends AnyAction {
  type: typeof MovieActionTypes.GET_MOVIE_BEGIN;
  payload: string;
}

export interface GetMovieSuccess extends AnyAction {
  type: typeof MovieActionTypes.GET_MOVIE_SUCCESS;
  payload: GetMovieResponse;
}

export interface GetMovieFailed extends AnyAction {
  type: typeof MovieActionTypes.GET_MOVIE_FAILED;
  payload: string;
}

export type MovieActionType = GetMovieBegin | GetMovieSuccess | GetMovieFailed;
