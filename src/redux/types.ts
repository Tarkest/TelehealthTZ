import {MoviesReducerState} from './list/reducer/types';
import {MovieReducerState} from './movie/reducer/types';

export type StoreType = {
  movieListReducer: MoviesReducerState;
  movieReducer: MovieReducerState;
};
