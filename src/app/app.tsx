import { Main } from 'src/pages/main';
import {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {SnackbarProvider} from 'notistack';
import { store, useAppDispatch } from 'src/store';
import { SignIn } from 'src/pages/sign-in';
import { MyList } from 'src/pages/my-list';
import { Film } from 'src/pages/film';
import { AddReview } from 'src/pages/add-review';
import { Player } from 'src/pages/player';
import { RoutePathname } from 'src/constants';
import { ErrorPage } from 'src/pages/error-page';
import {PrivateRoute} from 'src/components/private-route';
import { PlayerProps } from 'src/types';
import {ScrollToTop} from 'src/components/scroll-to-top';
import {getLogin} from 'src/store/api';

type Props = {
  player: PlayerProps
};

function Router(props: Props) {
  const { player } = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLogin());
  }, [dispatch]);
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path={RoutePathname.MAIN}>
              <Route
                index
                element={<Main/>}
              />
              <Route
                path={RoutePathname.LOGIN}
                element={<SignIn/>}
              />
              <Route
                path={RoutePathname.MY_LIST}
                element={<PrivateRoute><MyList/></PrivateRoute>}
              />
              <Route
                path={`${RoutePathname.FILMS}/:id`}
                element={<Film/>}
              />
              <Route
                path={`${RoutePathname.FILMS}/:id/${RoutePathname.REVIEW}`}
                element={(
                  <PrivateRoute navigateTo={`/${RoutePathname.LOGIN}`}>
                    <AddReview/>
                  </PrivateRoute>
                )}
              />
              <Route
                path={RoutePathname.PLAYER}
                element={<Player {...player}/>}
              />
            </Route>
            <Route path={RoutePathname.NOT_FOUND} element={<ErrorPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </SnackbarProvider>
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
