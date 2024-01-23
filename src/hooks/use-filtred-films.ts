import {useMemo} from 'react';
import {useAppSelector} from 'src/store';
import {ALL_GENRES} from 'src/constants';

export function useFiltredFilms() {
  const {genre, films} = useAppSelector((state) => state);
  return useMemo(() => {
    if (!films) {
      return null;
    }
    if (genre === ALL_GENRES) {
      return films;
    } else {
      return films.filter((film) => film.genre === genre);
    }
  }, [genre, films]);
}
