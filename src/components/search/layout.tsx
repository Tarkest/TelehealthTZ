import React from 'react';
import {SearchProps} from './types';
import {styles} from './styles';
import {View, TextInput} from 'react-native';

const SearchLayout: React.FC<SearchProps> = ({onChange, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder="Search for a movie"
        placeholderTextColor="grey"
      />
    </View>
  );
};

export default React.memo(SearchLayout);
