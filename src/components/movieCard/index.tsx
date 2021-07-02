import React from 'react';
import {MovieCardProps} from './types';
import Layout from './layout';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {MainRouteNavigation} from '../../navigation/main/types';

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  year,
  posterUrl,
  movieId,
}) => {
  const navigation = useNavigation<MainRouteNavigation>();

  const onPress = useCallback(() => {
    navigation.navigate('Movie', {movieId});
  }, [movieId]);

  return (
    <Layout onPress={onPress} title={title} year={year} posterUrl={posterUrl} />
  );
};

export default MovieCard;
