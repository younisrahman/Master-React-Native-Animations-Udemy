import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const AbsolutePosition = () => {
  const animation = useRef(new Animated.Value(0)).current;

  // DOnt use useNativeDriver: true, it return error
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 150,
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
  const animatedStyles = {
    top: animation,
    left: animation,
    right: animation,
  };

  return (
    <View style={styles.container}>
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
    height: '100%',
    width: '100%',
  },
  box: {
    position: 'absolute',
    // width: 150,
    height: 150,
    backgroundColor: 'tomato',
  },
});

export default AbsolutePosition;
