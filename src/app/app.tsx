import { Main } from 'src/pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { useFilms } from 'src/hooks';
import { SignIn } from 'src/pages/sign-in';
import { MyList } from 'src/pages/my-list';
import { Film } from 'src/pages/film';
import { AddReview } from 'src/pages/add-review';
import { Player } from 'src/pages/player';
import { RoutePathname } from 'src/constants';
import { ErrorPage } from 'src/pages/error-page';
import { CheckAuth } from 'src/components/check-auth';
import { PlayerProps } from 'src/types';

type Props = {
  player: PlayerProps
};

function Router(props: Props) {
  const { player } = props;
  const films = useFilms();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePathname.MAIN}>
          <Route
            index
            element={(
              <Main
                films={films}
              />
            )}
          />
          <Route
            path={RoutePathname.LOGIN}
            element={<SignIn />}
          />
          <Route
            path={RoutePathname.MY_LIST}
            element={<CheckAuth><MyList films={films} /></CheckAuth>}
          />
          <Route
            path={`${RoutePathname.FILMS}/:id`}
            element={<Film films={films} />}
          />
          <Route
            path={`${RoutePathname.FILMS}/:id/${RoutePathname.REVIEW}`}
            element={<AddReview films={films} />}
          />
          <Route
            path={RoutePathname.PLAYER}
            element={<Player {...player} />}
          />
        </Route>
        <Route
          path={RoutePathname.NOT_FOUND}
          element={<ErrorPage />}
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export function App(props: Props) {
  const { player } = props;
  return (
    <Provider store={store}>
      <Router player={player} />
    </Provider>
  );
}
