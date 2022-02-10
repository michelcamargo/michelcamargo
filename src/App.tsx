import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TemplateComponent from './components/UI/Template';

function Home() {
    return null;
}

function App(): JSX.Element {
  return (
      <Router>
          <Route path="/">
            <TemplateComponent>
              <Home />
            </TemplateComponent>
          </Route>

          <Route path="/work">
            <TemplateComponent>
              {/*<Portfolio />*/}
            </TemplateComponent>
          </Route>

          <Route path="">
            <TemplateComponent>
              {/*<ContactUs />*/}
            </TemplateComponent>
          </Route>
      </Router>
  );
}

export default App;
