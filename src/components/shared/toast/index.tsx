import React from 'react';
import {useSelector} from 'react-redux';
import {errorSelector} from '../../../redux/sharedSelectors';
import Layout from './layout';

export const Toast: React.FC = () => {
  const error = useSelector(errorSelector);

  return error ? <Layout message={error} /> : null;
};
