import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import randomsReducer from "./toolkitReducer";


const rootReducer = combineReducers({
    toolkit: randomsReducer
})

export const store = configureStore({
    reducer: rootReducer,
})