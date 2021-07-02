import React from 'react';
import {FilmsList} from '../components/filmList';
import {Search} from '../components/search';

export const HomeScreen: React.FC = () => {
  return (
    <>
      <Search />
      <FilmsList />
    </>
  );
};
