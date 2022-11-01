import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';
import { isRound1, isRound2, isRound3, isRound4 } from '../Helpers/round.helper';
import { wrongAnswerAtRound1, wrongAnswerAtRound2, wrongAnswerAtRound3, wrongAnswerAtRound4 } from '../Helpers/wrongAnswerAtRoundN.helper';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getActiveBrick } from '../Helpers/getActiveBrick.helper';

export const TICK_INTERVAL_IN_MS = 100

export interface BoardState {
  board: {[key in IBrick]: ISide};
  time: number;
  isPaused: boolean;
}

const initialStateRight = {
  board: {
    4: 'right',
    3: 'left',
    2: 'right',
    1: 'left',
  }
} as const;
const initialStateLeft = {
  board: {
    4: 'left',
    3: 'right',
    2: 'left',
    1: 'right',
  }
} as const;

const initialState: BoardState = {
  ...initialStateLeft,
  time: 20000,
  isPaused: true,
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    wrongAnswer: ({board, time}) => {
      if (isRound4(time)) wrongAnswerAtRound4(board)
      if (isRound3(time)) wrongAnswerAtRound3(board)
      if (isRound2(time)) wrongAnswerAtRound2(board)
      if (isRound1(time)) wrongAnswerAtRound1(board)
    },
    restartForLeft: () => ({ ...initialState, board: initialStateLeft.board}),
    restartForRight: () => ({ ...initialState, board: initialStateRight.board}),
    tick: (state) => { if(!state.isPaused) { state.time = Math.max(0, state.time - TICK_INTERVAL_IN_MS)}},
    pause: (state, action: PayloadAction<ISide | 'both'>) => { 
      if (
        action.payload === 'both'
        || action.payload === 'left' && getActiveBrick(state) === 'left'
        || action.payload === 'right' && getActiveBrick(state) === 'right'
      ) state.isPaused = true
    },
    play: (state) => { state.isPaused = false }
  }
});

export const { wrongAnswer, restartForLeft, restartForRight, tick, pause, play } = boardSlice.actions;

export const boardSelector = (state: RootState) => state.board.board;
export const timeSelector = (state: RootState) => state.board.time;
export const isOverSelector = (state: RootState) => state.board.time === 0;
export const boardStatusSelector = (state: RootState) => state.board.isPaused;
export const activeSideSelector = (state: RootState) => getActiveBrick(state.board);

export default boardSlice.reducer;
