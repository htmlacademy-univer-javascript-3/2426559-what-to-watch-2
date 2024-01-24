import { useCallback, useEffect } from 'react';
import { AuthorizationStatus, FilmStatus } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { AuthorizationSelector } from 'src/store/authorization/selectors';
import { fetchFavoriteFilms, postFilmStatus } from 'src/store/films/api';
import { FilmsSelector } from 'src/store/films/selectors';
import { Button } from './button';

type Props = {
    filmId: string
}

export function MyListButton(props: Props) {
  const { filmId } = props;
  const authorizationStatus = useAppSelector(AuthorizationSelector.status);
  const favoriteFilms = useAppSelector(FilmsSelector.favorite);
  const isAuthorized = authorizationStatus === AuthorizationStatus.authorized;
  const isFavoriteFilm = favoriteFilms?.find((film) => film.id === filmId);
  const countOfFavoriteFilms = favoriteFilms?.length;
  const newStatusOfFilm = isFavoriteFilm
    ? FilmStatus.deleteFromFavorite
    : FilmStatus.addToFavorite;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavoriteFilms());
    }
  }, [dispatch, isAuthorized]);
  const handleClick = useCallback(() => {
    dispatch(postFilmStatus({ filmId, status: newStatusOfFilm }));
  }, [dispatch, newStatusOfFilm, filmId]);
  if (!isAuthorized) {
    return null;
  }
  return (
    <Button
      className="btn--list"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavoriteFilm ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      {favoriteFilms !== null && (
        <span className="film-card__count">{countOfFavoriteFilms}</span>
      )}
    </Button>
  );
}
