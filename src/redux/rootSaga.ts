import {MovieListActionTypes} from './list/actions/types';
import {all, takeLatest, throttle} from 'redux-saga/effects';
import {fetchMovieListSaga, updateMoviesSearchSaga} from './list/sagas';
import {fetchMovieSaga} from './movie/sagas';
import {MovieActionTypes} from './movie/actions/types';

const listFetchThrotteDelay = 1000;

function* rootSaga() {
  yield all([
    throttle(
      listFetchThrotteDelay,
      MovieListActionTypes.GET_MOVIES_BEGIN,
      fetchMovieListSaga,
    ),
    takeLatest(
      MovieListActionTypes.UPDATE_MOVIES_SEARCH,
      updateMoviesSearchSaga,
    ),
    takeLatest(MovieActionTypes.GET_MOVIE_BEGIN, fetchMovieSaga),
  ]);
}

export default rootSaga;
