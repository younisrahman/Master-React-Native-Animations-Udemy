import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  PanResponder,
} from 'react-native';

const Decay = () => {
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
    onPanResponderRelease: (e, { vx, vy }) => {
      Animated.decay(animation, {
        velocity: { x: vx, y: vy },
        deceleration: 0.997,
        useNativeDriver: true,
      }).start();
    },
  });
  const animatedStyles = {
    transform: animation.getTranslateTransform(),
  };
  return (
    <View>
      <Animated.View
        {..._panResponder.panHandlers}
        style={[styles.box, animatedStyles]}
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

export default Decay;
