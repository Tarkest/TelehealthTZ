import React from 'react';
import {ActivityIndicator} from 'react-native';
import {styles} from './style';

export const LoadingIndicator: React.FC = () => {
  return <ActivityIndicator style={styles.activityIndicator} size="large" />;
};
