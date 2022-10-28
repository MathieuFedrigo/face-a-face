import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';

interface BoardState {
  board: {[key in IBrick]: ISide};
}

const initialStateLeft: BoardState = {
  board: {
    4: 'right',
    3: 'left',
    2: 'right',
    1: 'left',
  }
};
const initialStateRight: BoardState = {
  board: {
    4: 'left',
    3: 'right',
    2: 'left',
    1: 'right',
  }
};

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialStateLeft,
  reducers: {
    wrongAnswer: ({board}) => {
      if(board[4] !== board[3]){
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
            const newSide = board[4] === 'left' ? 'right' : 'left'
            board[4] = newSide
            board[3] = newSide
            board[2] = newSide
            board[1] = newSide
          }
        }
      }
    },
    restartForLeft: (state) => { state.board = initialStateLeft.board },
    restartForRight: (state) => { state.board = initialStateRight.board },
  }
});

export const { wrongAnswer, restartForLeft, restartForRight } = boardSlice.actions;

export const boardSelector = (state: RootState) => state.board.board;

export default boardSlice.reducer;
