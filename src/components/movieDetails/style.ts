import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 350,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    padding: 10,
    top: 240,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    opacity: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    opacity: 1,
  },
  textDark: {
    color: 'black',
    fontSize: 20,
    opacity: 1,
    marginHorizontal: 5,
    marginVertical: 4,
  },
});
