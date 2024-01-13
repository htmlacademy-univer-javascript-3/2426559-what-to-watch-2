import { Main, MainProps } from 'src/pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from 'src/pages/sign-in';
import { MyList } from 'src/pages/mylist';
import { Film } from 'src/pages/film';
import { AddReview } from 'src/pages/add-review';
import { Player } from 'src/pages/player';
import { RoutePathname } from 'src/constants';
import { ErrorPage } from 'src/pages/error-page';
import { CheckAuth } from 'src/check-auth';

type Props = MainProps;

export function App(props: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='RoutePathname.MAIN'>
          <Route
            index
            element={(
              <Main
                {...props}
              />
            )}
          />
          <Route
            path={RoutePathname.LOGIN}
            element={<SignIn />}
          />
          <Route
            path={RoutePathname.MY_LIST}
            element={<CheckAuth><MyList /></CheckAuth>}
          />
          <Route
            path={`${RoutePathname.FILMS}/:id`}
            element={<Film />}
          />
          <Route
            path={`${RoutePathname.FILMS}/:id/${RoutePathname.REVIEW}`}
            element={<AddReview />}
          />
          <Route
            path={`${RoutePathname.PLAYER}`}
            element={<Player />}
          />
        </Route>
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
