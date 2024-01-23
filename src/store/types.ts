import { TComment, TFilm, TFilmCard, TFilmPromo } from 'src/types';
import { store } from 'src/store/index';
import {AuthorizationStatus} from 'src/constants';

export type AppDispatch = typeof store.dispatch;

export type State = {
    genre: string,
    films: TFilmCard[] | null,
    promoFilm: TFilmPromo | null,
    film: TFilm | null,
    filmsSimilar: TFilmCard[] | null,
    filmsComments: TComment[] | null,
    favoriteFilms: TFilmCard[] | null,
    authorizationStatus: AuthorizationStatus | null
}
