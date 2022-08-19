import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const InterpolateOnInterpolate = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    });
  };
  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 300, 0],
  });
  const InterpolatedInterpolate = boxInterpolation.interpolate({
    inputRange: [0, 300],
    outputRange: [1, 0.5],
  });
  const boxXInterpolation = boxInterpolation.interpolate({
    inputRange: [0, 30, 50, 80, 100, 150, 250, 300],
    outputRange: [0, -30, -50, 80, -100, 300, 0, -100],
  });
  const animatedStyles = {
    transform: [
      { translateY: boxInterpolation },
      { translateX: boxXInterpolation },
    ],
    opacity: InterpolatedInterpolate,
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
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default InterpolateOnInterpolate;
