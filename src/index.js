import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from './context/ThemeContext';
import App from './containers/App';
import './styles/styles.css'
import './index.css';
import {store} from "./toolkitRedux/redux-store";

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

