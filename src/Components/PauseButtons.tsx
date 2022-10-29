import { FC } from "react";
import { Button, StyleSheet, View } from "react-native";
import { boardStatusSelector, pause } from "../redux/boardSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const PauseButtons: FC<{onPlay: () => void}> = ({onPlay}) => {
  const isPaused = useAppSelector(boardStatusSelector);
  const dispatch = useAppDispatch();
  const onPlayPress = () => {
    onPlay()
    dispatch(pause())
  }
  const onPauseLeftPress = () => {
    dispatch(pause())
  }
  const onPauseRightPress = () => {
    dispatch(pause())
  }

  if (isPaused) return <Button title={'PLAY'} onPress={onPlayPress}/>

  return (
    <View style={styles.buttonContainer}>
      <Button title={'PAUSE'} onPress={onPauseLeftPress}/>
      <Button title={'PAUSE'} onPress={onPauseRightPress}/>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
});
  