import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {Toast} from './src/components/shared/toast';
import {MainNavigator} from './src/navigation';
import store from './src/redux/index';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <Provider store={store}>
        <Toast />
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
