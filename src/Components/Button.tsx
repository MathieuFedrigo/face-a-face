import { FC } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const Button: FC<{ onPress: () => void, title: string, disabled?: boolean }> = ({onPress, title, disabled}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, disabled && { backgroundColor: 'grey', opacity: 0.5}]} disabled={disabled}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ed890a',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginHorizontal: 8,
    borderRadius: 16,
  }
});
  