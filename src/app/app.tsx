import { Main, Props as MainProps } from '../pages/main/main';

type Props = MainProps;

export function App(props: Props) {
  return (
    <Main
      {...props}
    />
  );
}
