import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {WorContext, WorProvider} from "./contex/wor";

ReactDOM.render(
    <HashRouter>
        <React.StrictMode>
            <WorProvider>
                <App WorContext={WorContext}/>
            </WorProvider>
        </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
);

