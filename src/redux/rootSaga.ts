import {FilmListActionTypes} from './list/actions/types';
import {all, takeLatest, throttle} from 'redux-saga/effects';
import {fetchFilmListSaga, updateFilmsSearchSaga} from './list/sagas';

function* rootSaga() {
  yield all([
    throttle(1000, FilmListActionTypes.GET_FILMS_BEGIN, fetchFilmListSaga),
    takeLatest(FilmListActionTypes.UPDATE_FILMS_SEARCH, updateFilmsSearchSaga),
  ]);
}

export default rootSaga;
