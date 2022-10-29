import { Button, StyleSheet, View } from 'react-native';
import { Brick } from '../Components/Brick';
import { useTimer } from '../Hooks/useTimer';
import { boardSelector, wrongAnswer, restartForLeft, restartForRight, pause, boardStatusSelector } from '../redux/boardSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const Board = () => {
  const board = useAppSelector(boardSelector);
  const isPaused = useAppSelector(boardStatusSelector);
  const dispatch = useAppDispatch();
  useTimer()

  return (
      <View style={styles.container}>
        <Brick number={4} side={board[4]} />
        <Brick number={3} side={board[3]} />
        <Brick number={2} side={board[2]} />
        <Brick number={1} side={board[1]} />
        <View style={{height: 30}}/>
        {isPaused ? <Button title='Wrong Answer' onPress={() => dispatch(wrongAnswer())}/> : null}
        <Button title={isPaused ? 'PLAY' : 'PAUSE'} onPress={() => dispatch(pause())}/>
        <View style={styles.buttonContainer}>
          <Button title='Reset for LEFT' onPress={() => dispatch(restartForLeft())}/>
          <Button title='Reset for RIGHT' onPress={() => dispatch(restartForRight())}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d638d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
});
