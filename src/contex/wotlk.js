import {createContext, useReducer} from "react";
import {setNewRandom} from "../data/dataWotlk";

const initialState = {
    newRandom: ["Let's Start!"],
};

const reducer = (state, action) => {
    if (action.type === "NEXT_RANDOM") {
        return {
            ...state,
            newRandom: setNewRandom(),
        };
    }
    if (action.type === "DEFAULT_RANDOM"){
        return{
            ...state,
            newRandom: state.newRandom = "Let's Start again"
        }
    }
    return state;
};

export const WotlkContext = createContext();

export const WotlkProvider = ({children}) => {
    const value = useReducer(reducer, initialState)
    return <WotlkContext.Provider value={value}>
        {children}
    </WotlkContext.Provider>
}

