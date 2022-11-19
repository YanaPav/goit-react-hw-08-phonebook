// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
// react-components
import { store } from 'redux/store'
import { persistor } from 'redux/store'
// shared-components
import { GlobalStyle } from 'shared/components/GlobalStyles/GlobalStyles'
// components
import { App } from 'components/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
