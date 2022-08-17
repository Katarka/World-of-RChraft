import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {HashRouter} from "react-router-dom";
import {ThemeProvider} from './context/ThemeContext';
import './index.css';
import {Provider} from "react-redux";
import store from "./redux/redux-store";

ReactDOM.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider>
                <App/>
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
);

