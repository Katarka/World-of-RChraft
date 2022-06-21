import {createContext, useReducer} from "react";
import {newRandom, setNewRandomWotlk} from "../data/dataWotlk";
import {setNewRandomBC} from "../data/dataBc";
import {setNewRandomClassic} from "../data/dataClassic";

const initialState = {
    newRandomClassic: ["Let's Start!"],
    newRandomBC: ["Let's Start!"],
    newRandomWotlk: ["Let's Start!"],
    rightBarHistory: []
};

const reducer = (state, action) => {
    if (action.type === "NEXT_RANDOM_CLASSIC") {
        return {
            ...state,
            newRandomClassic: state.newRandomClassic = setNewRandomClassic(),
        };
    }
    if (action.type === "NEXT_RANDOM_BC") {
        return {
            ...state,
            newRandomBC: state.newRandomBC = setNewRandomBC(),
        };
    }
    if (action.type === "NEXT_RANDOM_WOTLK") {
        return {
            ...state,
            newRandomWotlk: state.newRandomWotlk = newRandom(),
            rightBarHistory: state.rightBarHistory.concat([state.newRandomWotlk])
        };
    }
    if (action.type === "DEFAULT_RANDOM_CLASSIC") {
        return {
            ...state,
            newRandomClassic: state.newRandom = "Let's Start again"
        };
    }
    if (action.type === "DEFAULT_RANDOM_BC") {
        return {
            ...state,
            newRandomBC: state.newRandom = "Let's Start again"
        };
    }
    if (action.type === "DEFAULT_RANDOM_WOTLK") {
        return {
            ...state,
            newRandomWotlk: state.newRandom = "Let's Start again"
        };
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

