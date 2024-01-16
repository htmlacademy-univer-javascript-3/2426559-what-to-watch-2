import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { FilmsList } from 'src/components/films-list';
import { LinkButton } from 'src/components/buttons';
import { FilmCardData } from "src/types";
import { RoutePathname } from 'src/constants';

export type Props = {
  films: FilmCardData[]
}

export function Main(props: Props) {
  const { films } = props;
  const film = films[0];
  const { title, genre, year, preview, poster } = film;
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
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>
          <FilmsList films={films}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}
