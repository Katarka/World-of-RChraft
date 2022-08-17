import {dataClassic} from "../data/dataClassic";
import {dataBC} from "../data/dataBc";
import {dataWotlk} from "../data/dataWotlk";
import getRandomValueFromArray from "../function/random";

const NEXT_RANDOM_CLASSIC = 'NEXT_RANDOM_CLASSIC';
const NEXT_RANDOM_BC = 'NEXT_RANDOM_BC';
const NEXT_RANDOM_WOTLK = 'NEXT_RANDOM_WOTLK';

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

const initialState = {
    newRandomClassic: ["Let's Start!"],
    newRandomBC: ["Let's Start!"],
    newRandomWotlk: ["Let's Start!"],
    rightBarHistory: [],
};

const randomReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_RANDOM_CLASSIC:
            return {
                ...state,
                newRandomClassic: setNewRandom([dataClassic]),
                rightBarHistory: state.rightBarHistory.concat([state.newRandomClassic]),
            }
        case NEXT_RANDOM_WOTLK:
            return {
                ...state,
                newRandomBC: setNewRandom([dataBC]),
                rightBarHistory: state.rightBarHistory.concat([state.newRandomBC]),
            }
        case NEXT_RANDOM_WOTLK:
            return {
                ...state,
                newRandomWotlk: setNewRandom([dataWotlk]),
                rightBarHistory: state.rightBarHistory.concat([state.newRandomWotlk]),
            }
        default:
            return state;
    }
};

export const nextRandomClassic = (newRandomClassic) => ({type: NEXT_RANDOM_CLASSIC, newRandomClassic});
export const nextRandomBC = (newRandomBC) => ({type: NEXT_RANDOM_BC, newRandomBC});
export const nextRandomWotlk = (newRandomWotlk) => ({type: NEXT_RANDOM_WOTLK, newRandomWotlk});

export default randomReducer;
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

