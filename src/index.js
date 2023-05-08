import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/ContextProvider';
import { FilterContextProvider } from './context/Filter-Context';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/cartcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="usmantahir2119.eu.auth0.com"
  clientId="C6hQeJiG97H0UxH30kVr9IbgI4aXINHg"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  audience="my new Identifier"
  scope="openid profile email"
>
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
          <App/>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
