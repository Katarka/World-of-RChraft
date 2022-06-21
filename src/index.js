import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {WorContext, WorProvider} from "./contex/wor";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <WorProvider>
                <App WorContext={WorContext}/>
            </WorProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

