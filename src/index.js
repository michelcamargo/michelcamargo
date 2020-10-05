/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';

import Home from './pages/home';
import Counter from './pages/counter';
import Page404 from './pages/page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />

      <Route path="/counter" component={Counter} exact />
      <Route component={Page404} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
