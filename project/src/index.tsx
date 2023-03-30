import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import { offers } from './mocks/offers';

const Settings = {
  placesCount : 131
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App placesCount={Settings.placesCount} offers={offers} />
    </Provider>
  </React.StrictMode>,
);
