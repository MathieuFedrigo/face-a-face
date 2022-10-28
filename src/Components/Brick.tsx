import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';

export const Brick: FC<{number: IBrick, side: ISide}> = ({number, side}) => {
  return (
    <View style={[styles.container, {justifyContent: side === 'left' ? 'flex-end' : 'flex-start'}]}>
      <View style={[styles.brick, {backgroundColor: side === 'left' ? 'cyan' : 'pink'}]}>
        <Text>{number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  brick: {
    width: 200,
    height: 150,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
