import { createReducer } from '@reduxjs/toolkit';
import { ALL_GENRES } from 'src/constants';
import {State} from './types';
import {
  changeGenre,
  updateFavoriteFilms,
  updateFilm,
  updateFilmComments,
  updateFilms,
  updateFilmsSimilar,
  updatePromoFilm
} from './action';

const initialState: State = {
  genre: ALL_GENRES,
  films: null,
  promoFilm: null,
  film: null,
  filmsSimilar: null,
  filmsComments: null,
  favoriteFilms: null
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(updateFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(updatePromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(updateFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(updateFilmsSimilar, (state, action) => {
      state.filmsSimilar = action.payload;
    })
    .addCase(updateFilmComments, (state, action) => {
      state.filmsComments = action.payload;
    })
    .addCase(updateFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});
