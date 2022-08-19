import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import AnimatedMath from 'react-native-animated-math';

const Rotator = () => {
  const angle = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = (rotation = 1) => {
    Animated.timing(angle, {
      toValue: rotation * 2 * Math.PI,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => animate(rotation + 1));
  };

  // let { angle } = this.state,
  let radius = 130;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.dot,
          {
            transform: [
              {
                translateX: Animated.multiply(AnimatedMath.sin(angle), radius),
              },
              {
                translateY: Animated.multiply(AnimatedMath.cos(angle), -radius),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default Rotator;
