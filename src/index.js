import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store'

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/screen-captures" forceRefresh={true}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();