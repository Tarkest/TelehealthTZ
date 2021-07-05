import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {LoadingIndicator} from '../shared/loadingIndicator';
import {MovieLayoutProps} from './types';
import {styles} from './style';

const Movie: React.FC<MovieLayoutProps> = ({movie, loading}) => {
  if (loading) return <LoadingIndicator />;

  return movie ? (
    <ScrollView>
      <Image
        style={styles.poster}
        resizeMode="cover"
        source={{
          uri: movie.Poster,
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.Title}
        </Text>
        <Text style={styles.text}>{movie.Year}</Text>
      </View>
      <Text style={styles.textDark}>{movie.Plot}</Text>
      <Text style={styles.textDark}>Reated: {movie.Rated}</Text>
      <Text style={styles.textDark}>Metascore: {movie.Metascore}</Text>
      <Text style={styles.textDark}>Imdb: {movie.imdbRating}</Text>
    </ScrollView>
  ) : (
    <Text>Something went wrong</Text>
  );
};

export default React.memo(Movie);
