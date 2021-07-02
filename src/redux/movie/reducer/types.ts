import {GetMovieResponse} from '../../../utils/api/types';

export interface MovieReducerState {
  movieLoading: boolean;
  movie?: GetMovieResponse;
  movieGetError?: string;
}
