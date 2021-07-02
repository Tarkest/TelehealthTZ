import {StoreType} from '../types';
import {createSelector} from 'reselect';

export const searchSelector = (store: StoreType) =>
  store.movieListReducer.moviesSearch;

export const movieListSelector = (store: StoreType) =>
  store.movieListReducer.movies;

export const moviesListLoading = (store: StoreType) =>
  store.movieListReducer.moviesListLoading;

export const moviesListError = (store: StoreType) =>
  store.movieListReducer.movieListError;

export const moviesListErrorSelector = createSelector(
  moviesListLoading,
  moviesListError,
  (loading, error) => (!loading && error ? error : undefined),
);

export const moviesListToManyResultsSelector = createSelector(
  movieListSelector,
  moviesListLoading,
  moviesListError,
  (movies, loading, error) => (!movies && !loading && !error ? true : false),
);
