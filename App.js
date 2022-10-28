import { StyleSheet, Text, View } from 'react-native';
import { Brick } from './src/Components/Brick';

export default function App() {
  return (
    <View style={styles.container}>
      <Brick number={4} side='left' />
      <Brick number={3} side='right' />
      <Brick number={2} side='left' />
      <Brick number={1} side='right' />
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
