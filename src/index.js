import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from './context/ThemeContext';
import { ApolloProvider } from '@apollo/client';

import App from './containers/App';
import { store } from "./toolkitRedux/redux-store";
import client from './apollo/client';

import './index.css';
import './styles/styles.css';


ReactDOM.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider>
                    <ApolloProvider client={client}>
                        <App />
                    </ApolloProvider>
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    </HashRouter>,
    document.getElementById('root')
);

