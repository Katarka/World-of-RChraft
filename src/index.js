import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import dataWotlk from "./data/dataWotlk";
import dataBc from "./data/dataBc";
import dataClassic from "./data/dataClassic";
import getRandomValueFromArray from "./function/random";
import {WotlkProvider} from "./contex/wotlk";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <WotlkProvider>
                <App dataWotlk={dataWotlk} dataBc={dataBc} dataClassic={dataClassic} random={getRandomValueFromArray}/>
            </WotlkProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

