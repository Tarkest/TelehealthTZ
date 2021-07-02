import {FilmListActionType, FilmListActionTypes} from '../actions/types';
import {FilmReducerState} from './types';

const initialFilmListReducerState: FilmReducerState = {
  films: [],
  filmsListLoading: false,
  filmsSearch: '',
  filmListError: '',
};

export const filmListReducer = (
  state: FilmReducerState = initialFilmListReducerState,
  action: FilmListActionType,
) => {
  let newState: FilmReducerState;

  switch (action.type) {
    case FilmListActionTypes.GET_FILMS_BEGIN:
      newState = {
        ...state,
        filmsListLoading: true,
      };

      return newState;

    case FilmListActionTypes.GET_FILMS_SUCCESS:
      newState = {
        ...state,
        filmsListLoading: false,
        films: action.payload.Search,
      };

      delete newState.filmListError;

      return newState;

    case FilmListActionTypes.GET_FILMS_FAILED:
      newState = {
        ...state,
        filmsListLoading: false,
        filmListError: action.payload,
      };

      return newState;

    case FilmListActionTypes.UPDATE_FILMS_SEARCH:
      newState = {
        ...state,
        filmsSearch: action.payload,
      };

      return newState;

    default:
      return state;
  }
};
