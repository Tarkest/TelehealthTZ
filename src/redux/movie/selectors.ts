import {StoreType} from '../types';
import {createSelector} from 'reselect';

export const movieSelector = (store: StoreType) => store.movieReducer.movie;

export const movieLoading = (store: StoreType) =>
  store.movieReducer.movieLoading;

export const movieGetError = (store: StoreType) =>
  store.movieReducer.movieGetError;

export const movieErrorSelector = createSelector(
  movieLoading,
  movieGetError,
  (loading, error) => (!loading && error ? error : undefined),
);
