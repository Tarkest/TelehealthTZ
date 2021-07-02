import React from 'react';
import {SearchProps} from './types';
import {styles} from './styles';
import {View, TextInput} from 'react-native';

const SearchLayout: React.FC<SearchProps> = ({onChange, value}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onChange} value={value} />
    </View>
  );
};

export default React.memo(SearchLayout);
