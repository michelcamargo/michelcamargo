import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';
import Home from './pages/home';
import Page404 from './pages/page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      
      <Route component={Page404} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
