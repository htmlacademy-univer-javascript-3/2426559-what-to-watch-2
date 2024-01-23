import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { FilmsList } from 'src/components/films-list';
import { GenresCatalog } from 'src/components/genres-catalogue';
import { LinkButton } from 'src/components/buttons';
import { RoutePathname } from 'src/constants';
import { useFiltredFilms } from 'src/hooks';



export function Main() {
  const filtredFilms = useFiltredFilms();
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={} alt={} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={} alt={} />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{}</span>
                <span className="film-card__year">{}</span>
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
          <GenresCatalog films={} />
          <FilmsList films={filtredFilms} />
        </section>
        <Footer />
      </div>
    </>
  );
}
