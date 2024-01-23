import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { FilmsList } from 'src/components/films-list';



export function MyList() {
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
        <FilmsList films={} />
      </section>
      <Footer />
    </div>
  );
}
