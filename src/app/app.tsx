import { Main, Props as MainProps } from '../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


type Props = MainProps;

export function App(props: Props) {
  return (
    <Main
      {...props}
    />
  );
}
