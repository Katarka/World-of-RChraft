import { createAction, createReducer } from "@reduxjs/toolkit";
import setNewRandom from "../../function/randomizeFuction";
import { dataClassic } from "../../data/dataClassic";
import { dataBC } from "../../data/dataBc";
import { dataWotlk } from "../../data/dataWotlk";
import { dataCata } from "../../data/dataCata";

const initialState = {
    newRandomClassic: {},
    newRandomBC: ["Let's Start!"],
    newRandomWotlk: ["Let's Start!"],
    newRandomCata: ["Let's Start!"],
    rightBarHistory: [],
    downRandomState: ["Let's Start!"]
};

export const nextRandomClassic = createAction('NEXT_RANDOM_CLASSIC');
export const nextRandomBC = createAction('NEXT_RANDOM_BC');
export const nextRandomWotlk = createAction('NEXT_RANDOM_WOTLK');
export const nextRandomCataclysm = createAction('NEXT_RANDOM_CATACLYSM');
export const nextRandomPandaria = createAction('NEXT_RANDOM_PANDARIA');
export const nextRandomDreunor = createAction('NEXT_RANDOM_DREUNOR');
export const nextRandomLegion = createAction('NEXT_RANDOM_LEGION');
export const nextRandomBFA = createAction('NEXT_RANDOM_BFA');
export const nextRandomShadowLands = createAction('NEXT_RANDOM_SHADOWLANDS');
export const downRandom = createAction('DOWN_RANDOM')

export default createReducer(initialState, {
    [nextRandomClassic]: function (state) {
        state.newRandomClassic = state.newRandomBC = setNewRandom([dataClassic])
    },
    [nextRandomBC]: function (state) {
        state.newRandomBC = setNewRandom([dataBC])
    },
    [nextRandomWotlk]: function (state) {
        state.newRandomWotlk = setNewRandom([dataWotlk])
    },
    [nextRandomCataclysm]: function (state) {
        state.newRandomCata = setNewRandom([dataCata])
    },
    [downRandom]: function (state) {
        state.newRandomClassic = downRandom;
        state.newRandomBC = downRandom;
        state.newRandomWotlk = downRandom;
        state.newRandomCata = downRandom;
    }
})