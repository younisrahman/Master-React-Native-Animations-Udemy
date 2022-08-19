import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const ColorBackgroundColor = () => {
  const animation = useRef(new Animated.Value(0)).current;

  //   DOnt use useNativeDriver: true, it return error
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  };
  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [
      'rgba(71,255,99,1)',
      'rgba(255,99,71,1)',
      'rgba(99,71,255,1)',
    ],
  });
  const Bgcolor = animation.interpolate({
    inputRange: [0, 2],
    outputRange: ['rgba(255,99,71,1)', 'rgba(255,99,71,0)'],
  });
  const boxAnimatedStyles = {
    backgroundColor: boxInterpolation,
  };
  const ViewAnimatedStyles = {
    backgroundColor: Bgcolor,
  };

  return (
    <Animated.View style={[styles.container, ViewAnimatedStyles]}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyles]}></Animated.View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  box: {
    width: 150,
    height: 150,
    // backgroundColor: 'tomato',
  },
});

export default ColorBackgroundColor;
