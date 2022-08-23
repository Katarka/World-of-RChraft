import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import randomsReducer from "./reducers/randomReducer";
import addonReducer from "./reducers/addonReducer";


const rootReducer = combineReducers({
    randomsReducer,
    addonReducer
})

export const store = configureStore({
    reducer: rootReducer,
})