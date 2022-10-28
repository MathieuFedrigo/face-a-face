import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';

export const Brick: FC<{number: IBrick, side: ISide}> = ({number, side}) => {
  return (
    <View style={[styles.container, {backgroundColor: side === 'left' ? 'cyan' : 'pink'}]}>
      <Text>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
});
