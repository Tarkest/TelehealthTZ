import React from 'react';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateMoviesSearch} from '../../redux/list/actions';
import {searchSelector} from '../../redux/list/selectors';
import Layout from './layout';

export const Search: React.FC = () => {
  const value = useSelector(searchSelector);

  const dispatch = useDispatch();

  const onChange = useCallback((value: string) => {
    dispatch(updateMoviesSearch(value));
  }, []);

  return <Layout onChange={onChange} value={value} />;
};
