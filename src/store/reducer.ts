import { createReducer } from '@reduxjs/toolkit';
import { filmsMocks } from 'src/mocks/films';
import { ALL_GENRES } from 'src/constants';
import {changeGenre} from './action';
import {State} from './types';

const initialState: State = {
  genre: ALL_GENRES,
  films: filmsMocks
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});
