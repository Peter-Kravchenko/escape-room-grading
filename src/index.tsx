import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        theme="dark"
        position="bottom-center"
        autoClose={3000}
        pauseOnFocusLoss={false}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
