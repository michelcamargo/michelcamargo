import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {DefaultTheme, ThemeProvider} from 'styled-components';

import GlobalStyle from './styles/global';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

import usePersistedState from "./utils/usePersistedState";
import TemplatePage from './pages/TemplatePage';
import Home from './pages/Home';
import Contato from './pages/Contato';

import './styles/main.css';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Regular.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Bold.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-Italic.ttf';
import './assets/fonts/Atkinson-Hyperlegible/Atkinson-Hyperlegible-BoldItalic.ttf';

const App = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", lightTheme);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? darkTheme : lightTheme);
    }

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <GlobalStyle />
                        <TemplatePage toggleTheme={toggleTheme}>
                            <Home />
                        </TemplatePage>
                    </Route>

                    <Route path="/contato" exact>
                        <GlobalStyle />
                        <TemplatePage toggleTheme={toggleTheme}>
                            <Contato />
                        </TemplatePage>
                    </Route>

                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
