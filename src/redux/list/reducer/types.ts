export interface Film {
  Title: string;
  Poster: string;
  imdbID: string;
  Year: string;
}

export interface FilmReducerState {
  filmsListLoading: boolean;
  films: Film[];
  filmsSearch: string;
  filmListError?: string;
}
