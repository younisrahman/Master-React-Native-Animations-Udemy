import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Opacity from './src/Topics/Opacity';
import TranslatePosition from './src/Topics/TranslatePosition';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <Opacity /> */}
      <TranslatePosition />
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
