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
      toValue: 360,
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
  const boxRotationInterpolation = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const boxAnimatedStyles = {
    transform: [{ rotate: boxRotationInterpolation }],
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyles]}>
          <Animated.Text>
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
    backgroundColor: 'tomato',
  },
});

export default Rotation;
