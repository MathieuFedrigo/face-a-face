import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { pause } from "../redux/boardSlice";
import { useAppDispatch } from "../redux/hooks";

export const PauseButtons = () => {
  const dispatch = useAppDispatch();
  const onPauseLeftPress = () => {
    dispatch(pause('left'))
  }
  const onPauseRightPress = () => {
    dispatch(pause("right"))
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPauseLeftPress} style={styles.button}>
        <Text>BUZZ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPauseRightPress} style={styles.button}>
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
  