import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from './context/ThemeContext';
import { ApolloProvider } from '@apollo/client';

import App from './containers/App';
import { store, persistor } from "./toolkitRedux/redux-store";
import client from './apollo/client';

import './index.css';
import './styles/styles.css';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider>
                        <ApolloProvider client={client}>
                            <App />
                        </ApolloProvider>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    </HashRouter>
);

