import { FC } from "react";
import { Button } from "react-native";
import { boardStatusSelector, pause } from "../redux/boardSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const PauseButtons: FC<{onPress: () => void}> = ({onPress}) => {
  const isPaused = useAppSelector(boardStatusSelector);
  const dispatch = useAppDispatch();
  const onPlayPausePress = () => {
    onPress()
    dispatch(pause())
  }

  return <Button title={isPaused ? 'PLAY' : 'PAUSE'} onPress={onPlayPausePress}/>
}