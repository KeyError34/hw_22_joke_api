import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { 
  joke: '',
  status: 'idle',
  error: null,
};

//  получения случайной шутки
export const fetchRandomJoke = createAsyncThunk(
  'jokes/fetchRandomJoke',
  async () => {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Your App (https://yourwebsite.com)',
      },
    });
    return response.data;
  }
);

const jokeSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRandomJoke.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchRandomJoke.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.joke = action.payload.joke;
      })
      .addCase(fetchRandomJoke.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jokeSlice.reducer;
