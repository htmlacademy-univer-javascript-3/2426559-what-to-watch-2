import { Main } from 'src/pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {SnackbarProvider} from 'notistack';
import { store } from 'src/store';
import { SignIn } from 'src/pages/sign-in';
import { MyList } from 'src/pages/my-list';
import { Film } from 'src/pages/film';
import { AddReview } from 'src/pages/add-review';
import { Player } from 'src/pages/player';
import { RoutePathname } from 'src/constants';
import { ErrorPage } from 'src/pages/error-page';
import { CheckAuth } from 'src/components/check-auth';
import { PlayerProps } from 'src/types';
import {ScrollToTop} from 'src/components/scroll-to-top';

type Props = {
  player: PlayerProps
};

function Router(props: Props) {
  const { player } = props;
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
                element={<CheckAuth><MyList/></CheckAuth>}
              />
              <Route
                path={`${RoutePathname.FILMS}/:id`}
                element={<Film/>}
              />
              <Route
                path={`${RoutePathname.FILMS}/:id/${RoutePathname.REVIEW}`}
                element={<AddReview/>}
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
