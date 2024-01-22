import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { FilmsList } from 'src/components/films-list';
import { GenresCatalog } from 'src/components/genres-catalogue';
import { LinkButton } from 'src/components/buttons';
import { FilmCardData } from 'src/types';
import { RoutePathname } from 'src/constants';
import { useFiltredFilms } from 'src/hooks';

export type Props = {
  films: FilmCardData[]
}

export function Main(props: Props) {
  const { films } = props;
  const film = films[0];
  const { title, genre, year, preview, poster } = film;
  const filtredFilms = useFiltredFilms();
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={preview} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={poster} alt={title} />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>
              <div className="film-card__buttons">
                <LinkButton
                  link={`/${RoutePathname.PLAYER}`}
                  className="btn btn--play film-card__button"
                  svgViewBox="0 0 19 19"
                  svgWidth="19"
                  svgHeight="19"
                  icon="#play-s"
                  label="Play"
                />
                <LinkButton
                  link={`/${RoutePathname.MY_LIST}`}
                  className="btn btn--list film-card__button"
                  svgViewBox="0 0 19 20"
                  svgWidth="19"
                  svgHeight="20"
                  icon="#add"
                  label="My list"
                >
                  <span className="film-card__count">9</span>
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresCatalog films={films} />
          <FilmsList films={filtredFilms} />
        </section>
        <Footer />
      </div>
    </>
  );
}
