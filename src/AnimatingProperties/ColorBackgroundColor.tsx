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
      toValue: 1,
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
    inputRange: [0, 1],
    outputRange: ['rgba(255,99,71,1)', 'rgba(99,71,255,1)'],
  });
  const color = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(99,71,255,1)', 'rgba(255,99,71,1)'],
  });
  const boxAnimatedStyles = {
    backgroundColor: boxInterpolation,
  };
  const textAnimatedStyles = {
    color,
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyles]}>
          <Animated.Text style={textAnimatedStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In sint
            laudantium ab dolores consectetur, quia atque, delectus earum
            nesciunt incidunt temporibus! Placeat, excepturi velit ullam eum
            molestiae labore quam aliquid?
          </Animated.Text>
        </Animated.View>
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
  },
});

export default ColorBackgroundColor;
