import { StyleSheet, View } from 'react-native';
import { Brick } from '../Components/Brick';
import { boardSelector } from '../redux/boardSlice';
import { useAppSelector } from '../redux/hooks';

export const Board = () => {
  const board = useAppSelector(boardSelector);

  return (
      <View style={styles.container}>
        <Brick number={4} side={board[4]} />
        <Brick number={3} side={board[3]} />
        <Brick number={2} side={board[2]} />
        <Brick number={1} side={board[1]} />
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
