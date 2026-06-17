import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductList from './component/ProductList';

import {
  BrowserRouter
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductList>
        <App />
      </ProductList>
    </BrowserRouter>
  </React.StrictMode>
);


