import { BoardState } from "../redux/boardSlice";
import { isRound1, isRound2, isRound3, isRound4 } from './round.helper';

export const getActiveBrick = ({time, board}: BoardState) => {
  if (isRound4(time)) return board[4]
  if (isRound3(time)) return board[3]
  if (isRound2(time)) return board[2]
  if (isRound1(time)) return board[1]
}