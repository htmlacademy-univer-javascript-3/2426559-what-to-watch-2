import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { FilmsList } from 'src/components/films-list';
import {useEffect} from 'react';
import {fetchFavoriteFilms} from 'src/store/api';
import {useAppDispatch, useAppSelector} from 'src/store';

export function MyList() {
  const {favoriteFilms} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);
  if (!favoriteFilms) {
    return null;
  }
  const breadcrumbs = (
    <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
  );
  return (
    <div className="user-page">
      <Header
        breadcrumbs={breadcrumbs}
        headerClass="user-page__head"
      />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}
