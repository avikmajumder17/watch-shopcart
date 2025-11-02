import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ScrollToTop } from './components';
import { AuthProvider } from "./context/AuthContext";
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import './index.css';
import "./assets/css/responsive.css";
import App from './App';
import "./assets/media/sm/configed_css/settings_default.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <FilterProvider>
              
                <ToastContainer />
                
                <ScrollToTop />
                
                <App />
              
            </FilterProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);