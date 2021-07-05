import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useCallback} from 'react';
import Layout from './layout';

export const TopBar: React.FC = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return <Layout onGoBackPress={goBack} />;
};
