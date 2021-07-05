import AxiosInstance from './instance';
import {GetMovieResponse, GetMoviesResponse} from './types';

export const getMoviesList = async (
  searchText?: string,
  currentPage?: number,
) => {
  return await AxiosInstance.get<GetMoviesResponse>('', {
    params: {
      s: searchText && searchText.length > 0 ? searchText : 'Star Wars',
      page: currentPage ?? 1,
      type: 'movie',
    },
  });
};

export const getMovieById = async (movieId: string) => {
  return await AxiosInstance.get<GetMovieResponse>('', {
    params: {
      i: movieId,
      plot: 'full',
    },
  });
};
