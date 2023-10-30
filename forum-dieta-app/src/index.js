import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';

import './index.css';

import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header title="ReactNutri" />
    <RoutesApp />
  </React.StrictMode>
);