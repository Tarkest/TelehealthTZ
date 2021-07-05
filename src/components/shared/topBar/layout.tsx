import React from 'react';
import {TouchableHighlight, View, Image} from 'react-native';
import {styles} from './style';
import {TopBarLayoutProps} from './types';

const TopBarLayout: React.FC<TopBarLayoutProps> = ({onGoBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onGoBackPress}>
        <View style={styles.buttonWrapper}>
          <Image
            style={styles.backIcon}
            source={require('../../../../assets/icons/back_icon.png')}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default React.memo(TopBarLayout);
