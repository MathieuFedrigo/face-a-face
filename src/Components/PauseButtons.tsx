import { FC } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <TouchableOpacity onPress={onPauseLeftPress} style={styles.button}>
        <Text>PAUSE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPauseRightPress} style={styles.button}>
        <Text>PAUSE</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
},
button: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    height: 100,
    marginHorizontal: 8,
  }
});
  