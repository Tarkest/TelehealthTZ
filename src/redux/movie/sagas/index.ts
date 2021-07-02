import {put, call} from 'redux-saga/effects';
import {getMovieById} from '../../../utils/api';
import {getMovieSuccess, getMovieFailed} from '../actions';
import {GetMovieBegin} from '../actions/types';
import {FetchMovieGeneratorType} from './types';

export function* fetchMovieSaga(
  action: GetMovieBegin,
): FetchMovieGeneratorType {
  try {
    const res = yield call(getMovieById, action.payload);
    yield put(getMovieSuccess(res.data));
  } catch (error) {
    yield put(getMovieFailed(error));
  }
}
