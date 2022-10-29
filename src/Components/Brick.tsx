import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { timeSelector } from '../redux/boardSlice';
import { useAppSelector } from '../redux/hooks';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';

const roundBottomRadiusStyle = {
  borderBottomEndRadius: 16,
  borderBottomStartRadius: 16,
}

export const Brick: FC<{number: IBrick, side: ISide}> = ({number, side}) => {
  const timeLeft = useAppSelector(timeSelector);
  const notStarted = timeLeft > 5000*(number) 
  const finished = timeLeft < 5000*(number - 1) 
  let fillingPercentage = number - timeLeft/5000
  if (notStarted) fillingPercentage = 0
  if (finished) fillingPercentage = 1

  return (
    <View style={[styles.container, {justifyContent: side === 'left' ? 'flex-end' : 'flex-start'}]}>
      <View style={styles.brickContainer}>
        <View style={[styles.brick, {backgroundColor: '#ed890a'}]}/>
        <View style={[styles.indicator, {height: fillingPercentage * 150}, fillingPercentage > 0.95 ? roundBottomRadiusStyle : {}]} />
        <Text style={styles.text}>{number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brickContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brick: {
    width: 200,
    height: 150,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 16,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    width: 200,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderRadius: 16,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  text: {
    position: 'absolute',
    fontSize: 40,
  }
});
