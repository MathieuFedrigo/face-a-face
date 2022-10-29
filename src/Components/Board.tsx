import { Button, StyleSheet, Text, View } from 'react-native';
import { Brick } from '../Components/Brick';
import { useTimer } from '../Hooks/useTimer';
import { boardSelector, wrongAnswer, restartForLeft, restartForRight, timeSelector, tick, pause, boardStatusSelector } from '../redux/boardSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const Board = () => {
  const board = useAppSelector(boardSelector);
  const timeLeft = useAppSelector(timeSelector);
  const isPaused = useAppSelector(boardStatusSelector);
  const dispatch = useAppDispatch();
  useTimer()

  return (
      <View style={styles.container}>
        <Text>Time left: {timeLeft/1000}</Text>
        <Brick number={4} side={board[4]} />
        <Brick number={3} side={board[3]} />
        <Brick number={2} side={board[2]} />
        <Brick number={1} side={board[1]} />
        <Button title='Wrong Answer' onPress={() => dispatch(wrongAnswer())}/>
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
    flexDirection: 'row',
  },
});
