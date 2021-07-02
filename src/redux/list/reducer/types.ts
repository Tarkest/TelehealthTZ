export interface Movie {
  Title: string;
  Poster: string;
  imdbID: string;
  Year: string;
}

export interface MovieReducerState {
  moviesListLoading: boolean;
  movies: Movie[];
  moviesSearch: string;
  movieListError?: string;
}
