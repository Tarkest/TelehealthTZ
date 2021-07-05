import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {MovieDetails} from '../components/movieDetails';
import {TopBar} from '../components/shared/topBar';
import {MovieScreenProps} from '../navigation/main/types';
import {getMovieBegin} from '../redux/movie/actions';

export const MovieScreen: React.FC<MovieScreenProps> = ({route}) => {
  const {
    params: {movieId},
  } = route;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieBegin(movieId));
  }, [movieId]);

  return (
    <>
      <TopBar />
      <MovieDetails />
    </>
  );
};
