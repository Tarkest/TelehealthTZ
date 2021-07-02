import {GetFilmsResponse} from '../../../utils/api/types';
import {
  FilmListActionTypes,
  GetFilmsBegin,
  GetFilmsSuccess,
  GetFilmsFailed,
  UpdateFilmsSearch,
} from './types';

export const getFilmsBegin = (search?: string): GetFilmsBegin => ({
  type: FilmListActionTypes.GET_FILMS_BEGIN,
  payload: search,
});

export const getFilmsSuccess = (
  payload: GetFilmsResponse,
): GetFilmsSuccess => ({
  type: FilmListActionTypes.GET_FILMS_SUCCESS,
  payload,
});

export const getFilmsFailed = (errorMessage: string): GetFilmsFailed => ({
  type: FilmListActionTypes.GET_FILMS_FAILED,
  payload: errorMessage,
});

export const updateFilmsSearch = (searchText: string): UpdateFilmsSearch => ({
  type: FilmListActionTypes.UPDATE_FILMS_SEARCH,
  payload: searchText,
});
