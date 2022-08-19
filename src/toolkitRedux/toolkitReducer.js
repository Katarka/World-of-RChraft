import {createAction, createReducer} from "@reduxjs/toolkit";
import setNewRandom from "../function/random";
import {dataClassic} from "../data/dataClassic";
import {dataBC} from "../data/dataBc";
import {dataWotlk} from "../data/dataWotlk";
import {dataCata} from "../data/dataCata";

const initialState = {
    newRandomClassic: ["Let's Start!"],
    newRandomBC: ["Let's Start!"],
    newRandomWotlk: ["Let's Start!"],
    newRandomCata: ["Let's Start!"],
    rightBarHistory: [],
};

export const nextRandomClassic = createAction('NEXT_RANDOM_CLASSIC');
export const nextRandomBC = createAction('NEXT_RANDOM_BC');
export const nextRandomWotlk = createAction('NEXT_RANDOM_WOTLK');
export const nextRandomCata = createAction('NEXT_RANDOM_CATA');

export default createReducer(initialState, {
    [nextRandomClassic]: function (state) {
        state.newRandomClassic = setNewRandom([dataClassic])
    },
    [nextRandomBC]: function (state) {
        state.newRandomBC = setNewRandom([dataBC])
    },
    [nextRandomWotlk]: function (state) {
        state.newRandomWotlk = setNewRandom([dataWotlk])
    },
    [nextRandomCata]: function (state) {
        state.newRandomCata = setNewRandom([dataCata])
    },
})