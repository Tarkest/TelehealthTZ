import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

export type MainStackParamList = {
  Main: undefined;
  Movie: {movieId: string};
};

export type MainRouteProps = RouteProp<MainStackParamList, 'Main'>;

export type MainRouteNavigation = NativeStackNavigationProp<
  MainStackParamList,
  'Main'
>;

export type MainScreenProps = {
  route: MainRouteProps;
  navigation: MainRouteNavigation;
};

export type MovieRouteProps = RouteProp<MainStackParamList, 'Movie'>;

export type MovieRouteNavigation = NativeStackNavigationProp<
  MainStackParamList,
  'Movie'
>;

export type MovieScreenProps = {
  route: MovieRouteProps;
  navigation: MovieRouteNavigation;
};
