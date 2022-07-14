import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';

const SpringBox = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    animation.addListener(({ value }) => {
      console.log(value);
    });
    Animated.spring(animation, {
      toValue: 2,
      friction: 2,
      tension: 160,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    });
  };
  const animatedStyles = {
    transform: [{ scale: animation }],
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
});

export default SpringBox;
