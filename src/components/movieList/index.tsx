import React from 'react';
import {FlatList, ListRenderItem, ActivityIndicator, Text} from 'react-native';
import MovieCard from '../movieCard';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {Movie} from '../../redux/list/reducer/types';
import {
  movieListSelector,
  moviesListLoading,
  moviesListToManyResultsSelector,
} from '../../redux/list/selectors';
import {useEffect} from 'react';
import {getMoviesBegin} from '../../redux/list/actions';

export const MoviesList: React.FC = () => {
  const movies = useSelector(movieListSelector);

  const loading = useSelector(moviesListLoading);

  const toManyResults = useSelector(moviesListToManyResultsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesBegin());
  }, []);

  const renderItemComponent: ListRenderItem<Movie> = ({
    item: {Title, Poster, Year, imdbID},
  }) => (
    <MovieCard title={Title} year={Year} posterUrl={Poster} movieId={imdbID} />
  );

  const keyExtractor = (item: Movie) => `${item.imdbID}`;

  if (toManyResults) return <Text>Add more info to search, please</Text>;

  if (loading)
    return <ActivityIndicator style={styles.activityIndicator} size="large" />;

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
