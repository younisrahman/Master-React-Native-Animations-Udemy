import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Opacity from './src/AnimatingProperties/Opacity';
import Scale from './src/AnimatingProperties/Scale';
import WidthHeightValues from './src/AnimatingProperties/WidthHeightValues';
import TranslatePosition from './src/AnimatingProperties/TranslatePosition';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Opacity /> */}
      {/* <TranslatePosition /> */}
      {/* <Scale /> */}
      <WidthHeightValues />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
