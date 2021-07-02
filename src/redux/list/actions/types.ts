import {GetMoviesResponse} from '../../../utils/api/types';
import {AnyAction} from 'redux';

export enum MovieListActionTypes {
  GET_MOVIES_BEGIN = 'GET_MOVIES_BEGIN',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILED = 'GET_MOVIES_FAILED',
  UPDATE_MOVIES_SEARCH = 'UPDATE_MOVIES_SEARCH',
}

export interface GetMoviesBegin extends AnyAction {
  type: typeof MovieListActionTypes.GET_MOVIES_BEGIN;
  payload?: string;
}

export interface GetMoviesSuccess extends AnyAction {
  type: typeof MovieListActionTypes.GET_MOVIES_SUCCESS;
  payload: GetMoviesResponse;
}

export interface GetMoviesFailed extends AnyAction {
  type: typeof MovieListActionTypes.GET_MOVIES_FAILED;
  payload: string;
}

export interface UpdateMoviesSearch extends AnyAction {
  type: typeof MovieListActionTypes.UPDATE_MOVIES_SEARCH;
  payload: string;
}

export type MovieListActionType =
  | GetMoviesBegin
  | GetMoviesSuccess
  | GetMoviesFailed
  | UpdateMoviesSearch;
