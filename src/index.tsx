import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';
import { fetchQuests } from './store/api-actions';

store.dispatch(fetchQuests());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
        <ToastContainer />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
