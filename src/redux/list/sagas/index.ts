import {getMoviesFailed, getMoviesBegin} from './../actions/index';
import {call, put} from 'redux-saga/effects';
import {getMoviesList} from '../../../utils/api';
import {getMoviesSuccess} from '../actions';
import {GetMoviesBegin, UpdateMoviesSearch} from '../actions/types';
import {FetchMovieListGeneratorType} from './types';

export function* fetchMovieListSaga(
  action: GetMoviesBegin,
): FetchMovieListGeneratorType {
  try {
    const res = yield call(getMoviesList, action.payload);
    yield put(getMoviesSuccess(res.data));
  } catch (error) {
    yield put(getMoviesFailed(error));
  }
}

export function* updateMoviesSearchSaga(action: UpdateMoviesSearch) {
  yield put(getMoviesBegin(action.payload));
}
