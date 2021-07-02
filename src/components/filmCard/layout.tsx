import React from 'react';
import {Image, Text, View, TouchableHighlight} from 'react-native';
import {styles} from './style';
import {FilmCardLayoutProps} from './types';

const FilmCardLayout: React.FC<FilmCardLayoutProps> = ({
  posterUrl,
  title,
  year,
  onPress,
}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        {posterUrl !== 'N/A' ? (
          <Image
            style={styles.poster}
            resizeMode="cover"
            source={{
              uri: posterUrl,
            }}
          />
        ) : null}
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.year} numberOfLines={1}>
            {year}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default React.memo(FilmCardLayout);
