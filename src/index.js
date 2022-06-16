import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import dataWotlk from "./data/dataWotlk";
import dataBc from "./data/dataBc";
import dataClassic from "./data/dataClassic";
import getRandomValueFromArray from "./function/random";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App dataWotlk={dataWotlk} dataBc={dataBc} dataClassic={dataClassic} random={getRandomValueFromArray}/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

