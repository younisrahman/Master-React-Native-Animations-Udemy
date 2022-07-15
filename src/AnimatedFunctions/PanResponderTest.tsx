import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  PanResponder,
} from 'react-native';

const PanResponderTest = () => {
  const animation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      animation.extractOffset();
    },
    onPanResponderMove: Animated.event([
      null,
      {
        dx: animation.x,
        dy: animation.y,
      },
    ]),
  });
  //   const animatedStyles = {
  //     transform: animation.getTranslateTransform(),
  //   };
  return (
    <View>
      <Animated.View
        {..._panResponder.panHandlers}
        style={[styles.box, animation.getLayout()]}
        // style={[styles.box, animatedStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
});

export default PanResponderTest;
