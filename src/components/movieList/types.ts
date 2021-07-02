import {Movie} from '../../utils/api/types';

export interface MovieListProps {
  movies: Movie[];
  loading: boolean;
  toManyResults: boolean;
}
