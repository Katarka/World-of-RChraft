import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {HashRouter} from "react-router-dom";
import {WorContext, WorProvider} from "./context/wor";
import {ThemeProvider} from './context/ThemeContext';

import './index.css';

ReactDOM.render(
    <HashRouter>
        <React.StrictMode>
            <ThemeProvider>
            <WorProvider>
                <App WorContext={WorContext}/>
            </WorProvider>
            </ThemeProvider>
        </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
);

