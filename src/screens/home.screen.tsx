import React from 'react';
import {MoviesList} from '../components/movieList';
import {Search} from '../components/search';

export const HomeScreen: React.FC = () => {
  return (
    <>
      <Search />
      <MoviesList />
    </>
  );
};
