export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type GetMovieResponse = Movie & {
  Rated: string;
  Plot: string;
  Metascore: string;
  imdbRating: string;
};

export interface GetMoviesResponse {
  Search: Movie[];
  totalResults: string;
}
