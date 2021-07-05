import {createSelector} from 'reselect';
import {moviesListErrorSelector} from './list/selectors';
import {movieErrorSelector} from './movie/selectors';

export const errorSelector = createSelector(
  movieErrorSelector,
  moviesListErrorSelector,
  (movieError, listError) =>
    movieError ? movieError : listError ? listError : undefined,
);
