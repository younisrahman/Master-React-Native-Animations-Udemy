import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';

const EasingBox = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 250,
      duration: 1500,
      // easing: Easing.back(5),
      // easing: Easing.bounce,
      // easing: Easing.elastic(3),
      // easing: Easing.bezier(0.06, 1, 0.86, 0.23),
      easing: Easing.bezier(0.25, 0.1, 0.25, 0.1),

      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        // easing: Easing.back(2),
        // easing: Easing.bounce,
        // easing: Easing.elastic(3),
        // easing: Easing.bezier(0.06, 1, 0.86, 0.23),
        easing: Easing.bezier(0.25, 0.1, 0.25, 0.1),

        useNativeDriver: true,
      }).start();
    });
  };
  const animatedStyles = {
    transform: [{ translateY: animation }],
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
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default EasingBox;
