import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <BrowserRouter>
          <App/>
      </BrowserRouter>
);

