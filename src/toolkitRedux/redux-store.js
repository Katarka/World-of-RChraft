import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import randomsReducer from "./reducers/randomReducer";
import addonReducer from "./reducers/addonReducer";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    randomsReducer,
    addonReducer,
})

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: pReducer
})

export const persistor = persistStore(store)
