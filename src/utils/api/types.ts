export interface NetworkMovieForList {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type GetMovieResponse = NetworkMovieForList & {
  Rated: string;
  Plot: string;
  Metascore: string;
  imdbRating: string;
};

export interface GetMoviesResponse {
  Search: NetworkMovieForList[];
  totalResults: string;
}
