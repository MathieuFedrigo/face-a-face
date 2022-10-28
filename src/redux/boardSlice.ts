import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { IBrick } from '../Types/Brick';
import { ISide } from '../Types/Side';

interface BoardState {
  board: {[key in IBrick]: ISide};
}

const initialState: BoardState = {
  board: {
    4: 'left',
    3: 'right',
    2: 'left',
    1: 'right',
  }
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    pressSquare: (state, action: PayloadAction<IBrick>) => {},
  }
});

export const { pressSquare } = boardSlice.actions;

export const boardSelector = (state: RootState) => state.board.board;

export default boardSlice.reducer;
