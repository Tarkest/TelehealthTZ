import {StoreType} from '../types';
import {createSelector} from 'reselect';

export const searchSelector = (store: StoreType) =>
  store.filmListReducer.filmsSearch;

export const filmListSelector = (store: StoreType) =>
  store.filmListReducer.films;

export const filmsListLoading = (store: StoreType) =>
  store.filmListReducer.filmsListLoading;

export const filmsListError = (store: StoreType) =>
  store.filmListReducer.filmListError;

export const filmsListErrorSelector = createSelector(
  filmsListLoading,
  filmsListError,
  (loading, error) => (!loading && error ? error : undefined),
);
