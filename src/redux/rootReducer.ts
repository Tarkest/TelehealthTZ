import {combineReducers} from 'redux';
import {movieListReducer} from './list/reducer';
import {movieReducer} from './movie/reducer';

export default combineReducers({
  movieListReducer,
  movieReducer,
});
