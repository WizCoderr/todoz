import {StyleSheet, SafeAreaView, View } from 'react-native';
import TodoScreen from './src/screen/TodoScreen'
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
    <View>
      <TodoScreen/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
