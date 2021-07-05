import {GetMovieResponse} from '../../utils/api/types';

export interface MovieLayoutProps {
  movie?: GetMovieResponse;
  loading: boolean;
}
