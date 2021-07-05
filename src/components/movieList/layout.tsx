import React from 'react';
import {ListRenderItem, FlatList, Text} from 'react-native';
import {Movie} from '../../utils/api/types';
import MovieCard from '../movieCard';
import {LoadingIndicator} from '../shared/loadingIndicator';
import {styles} from './style';
import {MovieListProps} from './types';

const MoviesListLayout: React.FC<MovieListProps> = ({
  loading,
  movies,
  toManyResults,
}) => {
  const renderItemComponent: ListRenderItem<Movie> = ({
    item: {Title, Poster, Year, imdbID},
  }) => (
    <MovieCard title={Title} year={Year} posterUrl={Poster} movieId={imdbID} />
  );

  const keyExtractor = (item: Movie) => `${item.imdbID}`;

  if (toManyResults) return <Text>Add more info to search, please</Text>;

  if (loading) return <LoadingIndicator />;

  return (
    <FlatList
      initialNumToRender={4}
      contentContainerStyle={styles.content}
      style={styles.list}
      keyExtractor={keyExtractor}
      data={movies}
      renderItem={renderItemComponent}
    />
  );
};

export default React.memo(MoviesListLayout);
