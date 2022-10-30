import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { activeSideSelector, pause } from "../redux/boardSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Audio } from 'expo-av';
import { useEffect, useRef } from "react";

export const PauseButtons = () => {
  const dispatch = useAppDispatch();
  const activeSide = useAppSelector(activeSideSelector);
  const onPauseLeftPress = () => {
    dispatch(pause('left'))
    playSound()
  }
  const onPauseRightPress = () => {
    dispatch(pause("right"))
    playSound()
  }

  const sound = useRef<Audio.Sound>();

  useEffect(() => {
    return () => { sound.current.unloadAsync() }
  }, []);

  const playSound = async () => {
    const { sound: audio } = await Audio.Sound.createAsync(require("../../assets/buzz.mp3"));
    sound.current = audio
    await sound.current.playAsync();
  };


  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPauseLeftPress} style={styles.button} disabled={activeSide === 'right'}>
        <Text>BUZZ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPauseRightPress} style={styles.button} disabled={activeSide === 'left'}>
        <Text>BUZZ</Text>
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
    justifyContent: 'center',
    height: 100,
    marginHorizontal: 8,
    borderRadius: 16,
  }
});
  