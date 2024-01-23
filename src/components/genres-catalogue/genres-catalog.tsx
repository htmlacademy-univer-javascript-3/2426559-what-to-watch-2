import {useCallback, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from 'src/store';
import {changeGenre} from 'src/store/action';
import {ALL_GENRES} from 'src/constants';
import './genres-catalog.css';




export function GenresCatalog(props: Props) {
  const {films} = props;
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
  const handleClick = useCallback(
    (genre: string) => dispatch(changeGenre(genre)),
    [dispatch]
  );
  const listOfGenres = useMemo(() => {
    const newListOfGenres = new Set<string>();
    films.forEach((film) => newListOfGenres.add(film.genre));
    return [ALL_GENRES, ...newListOfGenres.values()];
  }, [films]);
  return (
    <ul className="catalog__genres-list">
      {listOfGenres.map((filmGenre) => {
        const className = [
          'catalog__genres-item',
          filmGenre === currentGenre && 'catalog__genres-item--active'
        ].filter(Boolean).join(' ');
        return (
          <li key={filmGenre} className={className}>
            <button
              type="button"
              onClick={() => handleClick(filmGenre)}
              className="catalog__genres-link clean-button"
            >
              {filmGenre}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
