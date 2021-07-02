import {GetFilmsResponse} from '../../../utils/api/types';
import {AxiosResponse} from 'axios';

export type FetchFilmListGeneratorType = Generator<
  any,
  any,
  AxiosResponse<GetFilmsResponse>
>;
