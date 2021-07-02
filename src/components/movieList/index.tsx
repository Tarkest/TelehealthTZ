import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  movieListSelector,
  moviesListLoading,
  moviesListToManyResultsSelector,
} from '../../redux/list/selectors';
import {useEffect} from 'react';
import {getMoviesBegin} from '../../redux/list/actions';
import Layout from './layout';

export const MoviesList: React.FC = () => {
  const movies = useSelector(movieListSelector);

  const loading = useSelector(moviesListLoading);

  const toManyResults = useSelector(moviesListToManyResultsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesBegin());
  }, []);

  return (
    <Layout loading={loading} movies={movies} toManyResults={toManyResults} />
  );
};
