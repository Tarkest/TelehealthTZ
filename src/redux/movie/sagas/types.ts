import {GetMovieResponse} from '../../../utils/api/types';
import {AxiosResponse} from 'axios';

export type FetchMovieGeneratorType = Generator<
  any,
  any,
  AxiosResponse<GetMovieResponse>
>;
