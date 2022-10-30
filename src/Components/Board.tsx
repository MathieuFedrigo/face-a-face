import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Brick } from '../Components/Brick';
import { useTimer } from '../Hooks/useTimer';
import { boardSelector, wrongAnswer, restartForLeft, restartForRight, boardStatusSelector, play, pause } from '../redux/boardSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ISide } from '../Types/Side';
import { Button } from './Button';
import { PauseButtons } from './PauseButtons';


export const Board = () => {
  const board = useAppSelector(boardSelector);
  const isPaused = useAppSelector(boardStatusSelector);

  const dispatch = useAppDispatch();
  useTimer()
  const [isWrongAnswerDisabled, setIsWrongAnswerDisabled] = useState(true)
  const onWrongAnswerPress = () => {
    setIsWrongAnswerDisabled(true)
    dispatch(wrongAnswer())
  }
  const onResetFactory = (side: ISide) => () => {
    if(side === 'left') dispatch(restartForLeft())
    if(side === 'right') dispatch(restartForRight())
    setIsWrongAnswerDisabled(true)
  }
  const onPlayPause = () => { if (isPaused) { dispatch(play()) } else { dispatch(pause('both')) } }
  useEffect(() => { if (isPaused) setIsWrongAnswerDisabled(false) }, [isPaused])

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title='Reset for LEFT' onPress={onResetFactory('left')}/>
          <Button title='Reset for RIGHT' onPress={onResetFactory('right')}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={isPaused ? 'PLAY' : 'PAUSE'} onPress={onPlayPause}/>
          <Button title='Wrong Answer' onPress={onWrongAnswerPress} disabled={!isPaused || isWrongAnswerDisabled} />
        </View>
        <Brick number={4} side={board[4]} />
        <Brick number={3} side={board[3]} />
        <Brick number={2} side={board[2]} />
        <Brick number={1} side={board[1]} />
        <View style={{height: 30}}/>
        <View style={styles.buttonContainer}>
          <PauseButtons />
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
    marginBottom: 5,
    flexDirection: 'row',
  },
});
