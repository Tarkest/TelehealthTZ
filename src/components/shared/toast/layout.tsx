import React, {useRef} from 'react';
import {Animated, Text} from 'react-native';
import {ToastLayoutProps} from './types';
import {styles} from './style';
import {useEffect} from 'react';

const ToastLayout: React.FC<ToastLayoutProps> = ({message}) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{...styles.container, opacity: fadeAnim}}>
      <Text>{message}</Text>
    </Animated.View>
  );
};

export default React.memo(ToastLayout);
