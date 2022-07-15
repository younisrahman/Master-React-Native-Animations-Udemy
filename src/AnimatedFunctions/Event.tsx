import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  ScrollView,
  Text,
} from 'react-native';

const Event = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const backgroundInterpolation = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(255,99,71)', 'rgb(71,99,255)'],
  });
  const animatedStyles = {
    backgroundColor: backgroundInterpolation,
  };
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: animation } } },
        ])}
      >
        <Animated.View style={[styles.content, animatedStyles]}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    height: 3000,
    width: '100%',
  },
});

export default Event;
