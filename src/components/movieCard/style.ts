import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    elevation: 5,
    flex: 1,
    overflow: 'hidden',
    marginBottom: 10,
    position: 'relative',
    height: 350,
  },
  poster: {
    flex: 1,
    flexGrow: 1,
  },
  infoContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flex: 1,
    padding: 15,
    backgroundColor: 'rgba(50, 50, 50, 0.6)',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    opacity: 1,
  },
  year: {
    color: 'white',
    fontSize: 20,
    opacity: 1,
  },
});
