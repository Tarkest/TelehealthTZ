export interface NetworkFilm {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface GetFilmsResponse {
  Search: NetworkFilm[];
  totalResults: string;
}
