import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    paddingTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 10,
    opacity: 1,
  },
});
