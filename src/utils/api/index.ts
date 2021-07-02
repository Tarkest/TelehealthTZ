import axios from 'axios';
import {GetMoviesResponse, GetMovieResponse} from './types';

const baseUrl = 'https://www.omdbapi.com';

const apikey = 'f1f91343';

export const getMoviesList = async (
  searchText?: string,
  currentPage?: number,
) => {
  return await axios.get<GetMoviesResponse>(baseUrl, {
    params: {
      apikey,
      s: searchText && searchText.length > 0 ? searchText : 'Star Wars',
      page: currentPage ?? 1,
      type: 'movie',
    },
  });
};

export const getMovieById = async (movieId: string) => {
  return await axios.get<GetMovieResponse>(baseUrl, {
    params: {
      apikey,
      i: movieId,
      plot: 'full',
    },
  });
};
