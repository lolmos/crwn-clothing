import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './redux/store';
import App from './App';
import {Provider} from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>  
  </Provider>
,
  document.getElementById('root')
);


