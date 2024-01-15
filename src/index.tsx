import React from 'react';
import ReactDOM from 'react-dom/client';
import {filmsMocks} from 'src/mocks/films';
import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      films={filmsMocks}
    />
  </React.StrictMode>
);
