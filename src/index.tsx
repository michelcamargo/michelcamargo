import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/main.css';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Regular.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Bold.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Italic.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-BoldItalic.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
