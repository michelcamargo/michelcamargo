import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplatePage from './pages/TemplatePage';
import Home from './pages/Home';

function Routes() {

  return(
    <Router>
      <Switch>
        <Route path="/">
          <TemplatePage>
            <Home />
          </TemplatePage>
        </Route>

        

      </Switch>
    </Router>
  )
}

export default Routes;
