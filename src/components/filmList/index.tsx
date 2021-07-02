import React from 'react';
import {FlatList, ListRenderItem, ActivityIndicator} from 'react-native';
import FilmCard from '../filmCard';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {Film} from '../../redux/list/reducer/types';
import {filmListSelector, filmsListLoading} from '../../redux/list/selectors';
import {useEffect} from 'react';
import {getFilmsBegin} from '../../redux/list/actions';

export const FilmsList: React.FC = () => {
  const films = useSelector(filmListSelector);

  const loading = useSelector(filmsListLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmsBegin());
  }, []);

  const renderItemComponent: ListRenderItem<Film> = ({
    item: {Title, Poster, Year, imdbID},
  }) => (
    <FilmCard title={Title} year={Year} posterUrl={Poster} movieId={imdbID} />
  );

  const keyExtractor = (item: Film) => `${item.imdbID}`;

  return loading ? (
    <ActivityIndicator style={styles.activityIndicator} size="large" />
  ) : (
    <FlatList
      contentContainerStyle={styles.content}
      style={styles.list}
      keyExtractor={keyExtractor}
      data={films}
      renderItem={renderItemComponent}
    />
  );
};
