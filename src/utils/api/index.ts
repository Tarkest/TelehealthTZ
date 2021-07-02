import axios from 'axios';
import {GetFilmsResponse} from './types';

const baseUrl = 'http://www.omdbapi.com';

const apikey = 'f1f91343';

export const getFilmsList = async (
  searchText?: string,
  currentPage?: number,
) => {
  return await axios.get<GetFilmsResponse>(baseUrl, {
    params: {
      apikey,
      s: searchText && searchText.length > 0 ? searchText : 'Star Wars',
      page: currentPage ?? 1,
      type: 'movie',
    },
  });
};

export const getFilm = async (filmId: string) => {
  return await axios.get(baseUrl, {
    params: {
      apikey,
      i: filmId,
    },
  });
};
