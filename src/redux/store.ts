import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './boardSlice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { board: BoardState }
export type AppDispatch = typeof store.dispatch;
