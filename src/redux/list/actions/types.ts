import {GetFilmsResponse} from '../../../utils/api/types';
import {AnyAction} from 'redux';

export enum FilmListActionTypes {
  GET_FILMS_BEGIN = 'GET_FILMS_BEGIN',
  GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS',
  GET_FILMS_FAILED = 'GET_FILMS_FAILED',
  UPDATE_FILMS_SEARCH = 'UPDATE_FILMS_SEARCH',
}

export interface GetFilmsBegin extends AnyAction {
  type: typeof FilmListActionTypes.GET_FILMS_BEGIN;
  payload?: string;
}

export interface GetFilmsSuccess extends AnyAction {
  type: typeof FilmListActionTypes.GET_FILMS_SUCCESS;
  payload: GetFilmsResponse;
}

export interface GetFilmsFailed extends AnyAction {
  type: typeof FilmListActionTypes.GET_FILMS_FAILED;
  payload: string;
}

export interface UpdateFilmsSearch extends AnyAction {
  type: typeof FilmListActionTypes.UPDATE_FILMS_SEARCH;
  payload: string;
}

export type FilmListActionType =
  | GetFilmsBegin
  | GetFilmsSuccess
  | GetFilmsFailed
  | UpdateFilmsSearch;
