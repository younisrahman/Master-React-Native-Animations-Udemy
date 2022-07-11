import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

const WidthHeightValues = () => {
  const animation = useRef(new Animated.Value(150)).current;

  // DOnt use useNativeDriver: true, it return error
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 150,
        duration: 1500,
      }).start();
    });
  };
  const animatedStyles = {
    width: animation,
    height: animation,
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
    // width: 150,
    // height: 150,
    backgroundColor: 'tomato',
  },
});

export default WidthHeightValues;
