import {createContext, useReducer} from "react";
import {dataWotlk} from "../data/dataWotlk";
import {dataBC} from "../data/dataBc";
import {dataClassic} from "../data/dataClassic";
import getRandomValueFromArray from "../function/random";

const initialState = {
    newRandomClassic: ["Let's Start!"],
    newRandomBC: ["Let's Start!"],
    newRandomWotlk: ["Let's Start!"],
    rightBarHistory: [],
};

const setNewRandom = ([data]) => {
    const newRandom = (faction, race, classRace, spec) => [
        faction = getRandomValueFromArray(data.faction),
        race = getRandomValueFromArray(data.race[faction]),
        classRace = getRandomValueFromArray(data.class[race]),
        spec = getRandomValueFromArray(data.spec[classRace]),
    ]
    return (
        newRandom().map(newRandom => newRandom)
    )
}

const reducer = (state, action) => {
    if (action.type === "NEXT_RANDOM_CLASSIC") {
        return {
            ...state,
            newRandomClassic: setNewRandom([dataClassic]),
            rightBarHistory: state.rightBarHistory.concat([state.newRandomClassic]),
        };
    }
    if (action.type === "NEXT_RANDOM_BC") {
        return {
            ...state,
            newRandomBC: setNewRandom([dataBC]),
            rightBarHistory: state.rightBarHistory.concat([state.newRandomBC]),
        };
    }
    if (action.type === "NEXT_RANDOM_WOTLK") {
        return {
            ...state,
            newRandomWotlk: setNewRandom([dataWotlk]),
            rightBarHistory: state.rightBarHistory.concat([state.newRandomWotlk]),
        };
    }
    // if (action.type === "DEFAULT_RANDOM_CLASSIC") {
    //     return {
    //         ...state,
    //         newRandomClassic: state.newRandom = "Let's Start again"
    //     };
    // }
    // if (action.type === "DEFAULT_RANDOM_BC") {
    //     return {
    //         ...state,
    //         newRandomBC: state.newRandom = "Let's Start again"
    //     };
    // }
    // if (action.type === "DEFAULT_RANDOM_WOTLK") {
    //     return {
    //         ...state,
    //         newRandomWotlk: state.newRandom = "Let's Start again",
    //     };
    // }
    return state;
};

export const WorContext = createContext();

export const WorProvider = ({children}) => {
    const value = useReducer(reducer, initialState)
    return <WorContext.Provider value={value}>
        {children}
    </WorContext.Provider>
}

