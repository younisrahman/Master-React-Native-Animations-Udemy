import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const WidthHeightPercentage = () => {
  const animation = useRef(new Animated.Value(0)).current;

  // DOnt use useNativeDriver: true, it return error
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
  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['50%', '70%'],
  });
  const widthInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['50%', '90%'],
  });
  const animatedStyles = {
    width: widthInterpolation,
    height: heightInterpolation,
  };
  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In sint
            laudantium ab dolores consectetur, quia atque, delectus earum
            nesciunt incidunt temporibus! Placeat, excepturi velit ullam eum
            molestiae labore quam aliquid?
          </Text>
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
    // width: '50%',
    // height: '50%',
    backgroundColor: 'tomato',
  },
});

export default WidthHeightPercentage;
