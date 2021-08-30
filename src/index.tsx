import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TemplatePage from './pages/TemplatePage';
import Home from './pages/Home';
import Contato from './pages/Contato';

import './reset.css';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Regular.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Bold.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Italic.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-BoldItalic.ttf';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
        <Route path="/" exact>
          <TemplatePage>
            <Home />
          </TemplatePage>
        </Route>

        <Route path="/contato" exact>
          <TemplatePage>
            <Contato />
          </TemplatePage>
        </Route>

        
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
