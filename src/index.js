import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {WorContext, WorProvider} from "./contex/wor";
import {ThemeProvider} from './contex/ThemeContext'

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <ThemeProvider>
            <WorProvider>
                <App WorContext={WorContext}/>
            </WorProvider>
            </ThemeProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

