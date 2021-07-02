export interface MovieCardProps {
  title: string;
  year: string;
  posterUrl: string;
  movieId: string;
}

export type MovieCardLayoutProps = Omit<MovieCardProps, 'movieId'> & {
  onPress: () => void;
};
