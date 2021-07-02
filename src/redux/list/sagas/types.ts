import {GetMoviesResponse} from '../../../utils/api/types';
import {AxiosResponse} from 'axios';

export type FetchMovieListGeneratorType = Generator<
  any,
  any,
  AxiosResponse<GetMoviesResponse>
>;
