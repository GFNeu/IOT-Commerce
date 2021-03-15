import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom"
import store from "./state/store"
import {Provider} from "react-redux"
import './index.scss' //Esto incluye ya bootstrap

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

