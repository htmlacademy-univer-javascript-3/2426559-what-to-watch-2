import { useCallback, useState } from 'react';
import { FilmCard } from 'src/components/film-card';
import { FilmCardData } from 'src/types';

type Props = {
    films: FilmCardData[]
}

export function FilmsList({ films }: Props) {
  const [activeFilm, setActiveFilm] = useState<FilmCardData | null>(null);
  const handleMouseEnter = useCallback((film: FilmCardData) => {
    setActiveFilm(film);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveFilm(null);
  }, []);
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          onMouseEnter={() => handleMouseEnter(film)}
          onMouseLeave={handleMouseLeave}
          isActive={activeFilm === film}
          {...film}
        />
      ))}
    </div>
  );
}
