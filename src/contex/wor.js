import {createContext, useReducer} from "react";
import {setNewRandomWotlk} from "../data/dataWotlk";
import {setNewRandomBC} from "../data/dataBc";
import {setNewRandomClassic} from "../data/dataClassic";

const initialState = {
    newRandomClassic: ["Let's Start!"],
    newRandomBC: ["Let's Start!"],
    newRandomWotlk: ["Let's Start!"]
};

const reducer = (state, action) => {
    if (action.type === "NEXT_RANDOM_WOTLK") {
        return {
            ...state,
            newRandomWotlk: setNewRandomWotlk(),
        };
    }
    if (action.type === "NEXT_RANDOM_BC"){
        return {
            ...state,
            newRandomBC: setNewRandomBC(),
        };
    }
    if (action.type === "NEXT_RANDOM_CLASSIC"){
        return {
            ...state,
            newRandomClassic: setNewRandomClassic(),
        };
    }
    if (action.type === "DEFAULT_RANDOM"){
        return{
            ...state,
            newRandomClassic: state.newRandom = "Let's Start again",
            newRandomBC: state.newRandom = "Let's Start again",
            newRandomWotlk: state.newRandom = "Let's Start again"
        }
    }
    return state;
};

export const WorContext = createContext();

export const WorProvider = ({children}) => {
    const value = useReducer(reducer, initialState)
    return <WorContext.Provider value={value}>
        {children}
    </WorContext.Provider>
}

