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

const reducer = (state, action) => {
    if (action.type === "NEXT_RANDOM_CLASSIC") {
        const setNewRandomClassic = () => {
            const newRandom = (faction, race, classRace, spec) => [
                faction = getRandomValueFromArray(dataClassic.faction),
                race = getRandomValueFromArray(dataClassic.race[faction]),
                classRace = getRandomValueFromArray(dataClassic.class[race]),
                spec = getRandomValueFromArray(dataClassic.spec[classRace]),
            ]
            return (
                newRandom().map(newRandom => newRandom).join('\n')
            )
        }
        return {
            ...state,
            newRandomClassic: setNewRandomClassic(),
            rightBarHistory: state.rightBarHistory.concat([state.newRandomClassic]),
        };
    }
    if (action.type === "NEXT_RANDOM_BC") {
        const setNewRandomBC = () => {
            const newRandom = (faction, race, classRace, spec) => [
                faction = getRandomValueFromArray(dataBC.faction),
                race = getRandomValueFromArray(dataBC.race[faction]),
                classRace = getRandomValueFromArray(dataBC.class[race]),
                spec = getRandomValueFromArray(dataBC.spec[classRace]),
            ]
            return (
                newRandom().map(newRandom => newRandom).join('\n')
            )
        }
        return {
            ...state,
            newRandomBC: setNewRandomBC(),
            rightBarHistory: state.rightBarHistory.concat([state.newRandomBC]),
        };
    }
    if (action.type === "NEXT_RANDOM_WOTLK") {
        const setNewRandomWotlk = () => {
            const newRandom = (faction, race, classRace, spec) => [
                faction = getRandomValueFromArray(dataWotlk.faction),
                race = getRandomValueFromArray(dataWotlk.race[faction]),
                classRace = getRandomValueFromArray(dataWotlk.class[race]),
                spec = getRandomValueFromArray(dataWotlk.spec[classRace])
            ]
            return (
                newRandom().map(newRandom => <pre>{newRandom}</pre>)
            )
        }
        return {
            ...state,
            newRandomWotlk: state.newRandomWotlk = setNewRandomWotlk(),
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

