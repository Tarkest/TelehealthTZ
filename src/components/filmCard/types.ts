export interface FilmCardProps {
  title: string;
  year: string;
  posterUrl: string;
  movieId: string;
}

export type FilmCardLayoutProps = Omit<FilmCardProps, 'movieId'> & {
  onPress: () => void;
};
