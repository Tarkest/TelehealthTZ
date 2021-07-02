import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from './types';
import {HomeScreen, MovieScreen} from '../../screens';

const {Navigator, Screen} = createStackNavigator<MainStackParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <Navigator headerMode="none" initialRouteName="Main">
      <Screen name="Main" component={HomeScreen} />
      <Screen name="Movie" component={MovieScreen} />
    </Navigator>
  );
};
