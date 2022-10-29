import { BoardState } from "../redux/boardSlice";

export const isRound4 = (time: BoardState['time']): boolean => 15000 < time && time < 20000
export const isRound3 = (time: BoardState['time']): boolean => 10000 < time && time < 15000
export const isRound2 = (time: BoardState['time']): boolean =>  5000 < time && time < 10000
export const isRound1 = (time: BoardState['time']): boolean =>     0 < time && time <  5000