import React from 'react';
import {useCallback} from 'react';
import {TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateFilmsSearch} from '../../redux/list/actions';
import {searchSelector} from '../../redux/list/selectors';
import {styles} from './layout';

export const Search: React.FC = () => {
  const searchValue = useSelector(searchSelector);

  const dispatch = useDispatch();

  const onChange = useCallback((value: string) => {
    dispatch(updateFilmsSearch(value));
  }, []);

  return (
    <View style={{...styles.container}}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={searchValue}
      />
    </View>
  );
};
