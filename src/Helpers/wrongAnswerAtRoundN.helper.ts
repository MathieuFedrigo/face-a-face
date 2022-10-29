import { BoardState } from "../redux/boardSlice";
import { IBrick } from "../Types/Brick";

export const wrongAnswerAtRound4 = (board: BoardState['board']) => {
  if(board[4] !== board[3]) {
    board[4] = board[3]
  } else {
    if(board[3] !== board[2]){
      board[4] = board[2]
      board[3] = board[2]
    } else {
      if(board[2] !== board[1]){
        board[4] = board[1]
        board[3] = board[1]
        board[2] = board[1]
      } else {
        const newSide = board[1] === 'left' ? 'right' : 'left'
        board[4] = newSide
        board[3] = newSide
        board[2] = newSide
        board[1] = newSide
      }
    }
  }
}

export const wrongAnswerAtRound3 = (board: BoardState['board']) => {
  if(board[3] !== board[2]){
    board[3] = board[2]
  } else {
    if(board[2] !== board[1]){
      board[3] = board[1]
      board[2] = board[1]
    } else {
      const newSide = board[1] === 'left' ? 'right' : 'left'
      board[3] = newSide
      board[2] = newSide
      board[1] = newSide
    }
  }
}

export const wrongAnswerAtRound2 = (board: BoardState['board']) => {
  if(board[2] !== board[1]){
    board[2] = board[1]
  } else {
    const newSide = board[1] === 'left' ? 'right' : 'left'
    board[2] = newSide
    board[1] = newSide
  }
}

export const wrongAnswerAtRound1 = (board: BoardState['board']) => {
  const newSide = board[1] === 'left' ? 'right' : 'left'
  board[1] = newSide
}