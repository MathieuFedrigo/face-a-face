import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Brick } from '../Components/Brick';
import { useTimer } from '../Hooks/useTimer';
import { boardSelector, wrongAnswer, restartForLeft, restartForRight, boardStatusSelector } from '../redux/boardSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ISide } from '../Types/Side';
import { PauseButtons } from './PauseButtons';


export const Board = () => {
  const board = useAppSelector(boardSelector);
  const isPaused = useAppSelector(boardStatusSelector);

  const dispatch = useAppDispatch();
  useTimer()
  const [isWrongAnswerDisabled, setIsWrongAnswerDisabled] = useState(true)
  const onPlayPausePress = () => { if(isPaused) setIsWrongAnswerDisabled(false) }
  const onWrongAnswerPress = () => {
    setIsWrongAnswerDisabled(true)
    dispatch(wrongAnswer())
  }
  const onResetFactory = (side: ISide) => () => {
    if(side === 'left') dispatch(restartForLeft())
    if(side === 'right') dispatch(restartForRight())
    setIsWrongAnswerDisabled(true)
  }

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title='Reset for LEFT' onPress={onResetFactory('left')}/>
          <Button title='Reset for RIGHT' onPress={onResetFactory('right')}/>
        </View>
          {isPaused && !isWrongAnswerDisabled 
            ? <Button title='Wrong Answer' onPress={onWrongAnswerPress}/>
            : <PauseButtons onPlay={onPlayPausePress}/>
          }
        <Brick number={4} side={board[4]} />
        <Brick number={3} side={board[3]} />
        <Brick number={2} side={board[2]} />
        <Brick number={1} side={board[1]} />
        <View style={{height: 30}}/>
        <View style={styles.buttonContainer}>
          {isPaused && !isWrongAnswerDisabled 
            ? <Button title='Wrong Answer' onPress={onWrongAnswerPress}/>
            : <PauseButtons onPlay={onPlayPausePress}/>
          }
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
    marginBottom: 20,
    flexDirection: 'row',
  },
});
