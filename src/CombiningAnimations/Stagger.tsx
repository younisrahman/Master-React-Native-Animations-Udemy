import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const Stagger = () => {
  const scale_animation = useRef(new Animated.Value(1)).current;
  const color_animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.stagger(500, [
      Animated.timing(scale_animation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(color_animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      Animated.stagger(500, [
        Animated.timing(scale_animation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(color_animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start();
    });
  };
  const backgroundColorInterpolate = color_animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['tomato', 'green'],
  });
  const animatedStyles = {
    backgroundColor: backgroundColorInterpolate,
    transform: [{ scale: scale_animation }],
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>This side forward</Text>
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

export default Stagger;
