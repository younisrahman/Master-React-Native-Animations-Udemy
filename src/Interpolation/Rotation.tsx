import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const Rotation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  //   DOnt use useNativeDriver: true, it return error
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };
  const boxRotationInterpolationX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const boxRotationInterpolationY = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '0deg', '180deg'],
  });

  const boxAnimatedStyles = {
    transform: [
      { rotateX: boxRotationInterpolationX },
      { rotateY: boxRotationInterpolationY },
    ],
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyles]}></Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    // backgroundColor: 'tomato',
    backgroundColor: 'tomato',
  },
});

export default Rotation;
