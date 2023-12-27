import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/Contacts/App';
import './index.css';
import { Provider } from 'react-redux';

import { persistor, store } from 'store/store';
import { BrowserRouter } from 'react-router-dom';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
