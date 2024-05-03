import React from 'react';
import { createRoot } from 'react-dom/client'; // Modifique a importação aqui
import App from './App';
import GlobalStyle from './globalStyle'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
