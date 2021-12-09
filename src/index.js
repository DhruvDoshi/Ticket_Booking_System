import React from 'react';
import ReactDOM from 'react-dom';
import { EventProvider } from "./context/events";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';

ReactDOM.render(
  <EventProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </EventProvider>,
  document.getElementById('root')
);
