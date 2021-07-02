import {MovieListActionTypes} from './list/actions/types';
import {all, takeLatest, throttle} from 'redux-saga/effects';
import {fetchMovieListSaga, updateMoviesSearchSaga} from './list/sagas';
import {fetchMovieSaga} from './movie/sagas';
import {MovieActionTypes} from './movie/actions/types';

function* rootSaga() {
  yield all([
    throttle(1000, MovieListActionTypes.GET_MOVIES_BEGIN, fetchMovieListSaga),
    takeLatest(
      MovieListActionTypes.UPDATE_MOVIES_SEARCH,
      updateMoviesSearchSaga,
    ),
    takeLatest(MovieActionTypes.GET_MOVIE_BEGIN, fetchMovieSaga),
  ]);
}

export default rootSaga;
