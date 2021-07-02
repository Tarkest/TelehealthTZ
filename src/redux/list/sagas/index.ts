import {getFilmsFailed, getFilmsBegin} from './../actions/index';
import {call, put} from 'redux-saga/effects';
import {getFilmsList} from '../../../utils/api';
import {getFilmsSuccess} from '../actions';
import {GetFilmsBegin, UpdateFilmsSearch} from '../actions/types';
import {FetchFilmListGeneratorType} from './types';

export function* fetchFilmListSaga(
  action: GetFilmsBegin,
): FetchFilmListGeneratorType {
  try {
    const res = yield call(getFilmsList, action.payload);
    yield put(getFilmsSuccess(res.data));
  } catch (error) {
    yield put(getFilmsFailed(error));
  }
}

export function* updateFilmsSearchSaga(action: UpdateFilmsSearch) {
  yield put(getFilmsBegin(action.payload));
}
