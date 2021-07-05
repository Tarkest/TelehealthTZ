import React from 'react';
import {useSelector} from 'react-redux';
import {movieLoading, movieSelector} from '../../redux/movie/selectors';
import Layout from './layout';

export const MovieDetails: React.FC = () => {
  const movie = useSelector(movieSelector);

  const loading = useSelector(movieLoading);

  return <Layout loading={loading} movie={movie} />;
};
