import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
     <HashRouter>
      <App />
     </HashRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);