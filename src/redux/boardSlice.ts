import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';

export const TICK_INTERVAL_IN_MS = 100

interface BoardState {
  board: {[key in IBrick]: ISide};
  time: number;
}

const initialStateLeft = {
  board: {
    4: 'right',
    3: 'left',
    2: 'right',
    1: 'left',
  }
} as const;
const initialStateRight = {
  board: {
    4: 'left',
    3: 'right',
    2: 'left',
    1: 'right',
  }
} as const;

const initialState: BoardState = {
  ...initialStateLeft,
  time: 20000
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
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
    restartForLeft: () => ({ ...initialState, board: initialStateLeft.board}),
    restartForRight: () => ({ ...initialState, board: initialStateRight.board}),
    tick: (state) => { state.time = Math.max(0, state.time - TICK_INTERVAL_IN_MS)}
  }
});

export const { wrongAnswer, restartForLeft, restartForRight, tick } = boardSlice.actions;

export const boardSelector = (state: RootState) => state.board.board;
export const timeSelector = (state: RootState) => state.board.time;

export default boardSlice.reducer;
