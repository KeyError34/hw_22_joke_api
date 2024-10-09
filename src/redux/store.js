import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from './slices/quoteSlice';

export const store = configureStore({
  reducer: {
    jokes: jokeReducer,
  },
});