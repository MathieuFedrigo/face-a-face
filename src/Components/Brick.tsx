import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { timeSelector } from '../redux/boardSlice';
import { useAppSelector } from '../redux/hooks';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';

export const Brick: FC<{number: IBrick, side: ISide}> = ({number, side}) => {
  const timeLeft = useAppSelector(timeSelector);
  const notStarted = timeLeft > 5000*(number) 
  const finished = timeLeft < 5000*(number - 1) 
  let fillingPercentage = number - timeLeft/5000
  if (notStarted) fillingPercentage = 0
  if (finished) fillingPercentage = 1

  return (
    <View style={[styles.container, {justifyContent: side === 'left' ? 'flex-end' : 'flex-start'}]}>
      <View style={[styles.indicator, {height: fillingPercentage * 150}]}/>
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
    opacity: 0.5,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    width: 200,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
