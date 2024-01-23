import { useCallback, useState } from 'react';
import { FilmCard } from 'src/components/film-card';
import {TFilmCard} from 'src/types';

type Props = {
    films: TFilmCard[]
}

const FILMS_TO_SHOW_AMOUNT = 8;

export function FilmsList({ films }: Props) {
  const [activeFilm, setActiveFilm] = useState<TFilmCard | null>(null);
  const [countOfFilmsShown, setCountOfFilmsShown] = useState<number>(FILMS_TO_SHOW_AMOUNT);
  const handleMouseEnter = useCallback((film: TFilmCard) => {
    setActiveFilm(film);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveFilm(null);
  }, []);
  const handleShowMore = useCallback(() => {
    setCountOfFilmsShown((state) => state + FILMS_TO_SHOW_AMOUNT);
  }, []);
  const showButton = films.length > countOfFilmsShown;
  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, countOfFilmsShown).map((film) => (
          <FilmCard
            key={film.id}
            onMouseEnter={() => handleMouseEnter(film)}
            onMouseLeave={handleMouseLeave}
            isActive={activeFilm === film}
            {...film}
          />
        ))}
      </div>
      {showButton && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={handleShowMore}
          >
          Show more
          </button>
        </div>
      )}
    </>
  );
}
