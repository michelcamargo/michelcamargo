import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TemplateComponent from './components/UI/Template';
import Home from "./views/Home";
import NotFound from "./views/404";

function App(): JSX.Element {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<TemplateComponent><Home /></TemplateComponent>} />
              <Route path="*" element={<TemplateComponent><NotFound /></TemplateComponent>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
