import {Movie} from '../../../utils/api/types';

export interface MoviesReducerState {
  moviesListLoading: boolean;
  movies: Movie[];
  moviesSearch: string;
  movieListError?: string;
}
