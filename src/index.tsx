import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import lightTheme from './styles/themes/light';
// import darkTheme from './styles/themes/dark';

import TemplatePage from './pages/TemplatePage';
import Home from './pages/Home';
import Contato from './pages/Contato';

import './styles/main.css';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Regular.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Bold.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Italic.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-BoldItalic.ttf';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <GlobalStyle />
            <TemplatePage>
              <Home />
            </TemplatePage>
          </Route>

          <Route path="/contato" exact>
            <GlobalStyle />
            <TemplatePage>
              <Contato />
            </TemplatePage>
          </Route>

        </Switch>
      </Router>
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
