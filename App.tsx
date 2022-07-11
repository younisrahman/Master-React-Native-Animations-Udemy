import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Opacity from './src/AnimatingProperties/Opacity';
import Scale from './src/AnimatingProperties/Scale';
import WidthHeightValues from './src/AnimatingProperties/WidthHeightValues';
import TranslatePosition from './src/AnimatingProperties/TranslatePosition';
import React from 'react';
import AbsolutePosition from './src/AnimatingProperties/AbsolutePosition';
import ColorBackgroundColor from './src/AnimatingProperties/ColorBackgroundColor';
import Rotation from './src/AnimatingProperties/Rotation';
import WidthHeightPercentage from './src/AnimatingProperties/WidthHeightPercentage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Opacity /> */}
      {/* <TranslatePosition /> */}
      {/* <Scale /> */}
      {/* <WidthHeightValues /> */}
      {/* <AbsolutePosition /> */}
      {/* <ColorBackgroundColor /> */}
      {/* <Rotation /> */}
      <WidthHeightPercentage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100%',
    // width: '100%',
  },
});
