import { createAction, createReducer } from "@reduxjs/toolkit";
import setNewRandom from "../../function/randomizeFuction";
import { dataClassic } from "../../data/dataClassic";
import { dataBC } from "../../data/dataBc";
import { dataWotlk } from "../../data/dataWotlk";
import { dataCata } from "../../data/dataCata";
import { dataPand } from "../../data/dataPand";
import { dataDraenor } from "../../data/dataDraenor";
import { dataLegion } from "../../data/dataLegion";
import { dataBfa } from "../../data/dataBfa";
import { dataSL } from "../../data/dataSL.js";


const initialState = {
    newRandomClassic: {},
    newRandomBC: ["Let's Start!"],
    newRandomWotlk: ["Let's Start!"],
    newRandomCata: ["Let's Start!"],
    newRandomPand: ["Let's Start!"],
    newRandomDraenor: ["Let's Start!"],
    newRandomLegion: ["Let's Start!"],
    newRandomBfa: ["Let's Start!"],
    newRandomSl: ["Let's Start!"],
    rightBarHistory: []
};

export const nextRandomClassic = createAction('NEXT_RANDOM_CLASSIC');
export const nextRandomBC = createAction('NEXT_RANDOM_BC');
export const nextRandomWotlk = createAction('NEXT_RANDOM_WOTLK');
export const nextRandomCataclysm = createAction('NEXT_RANDOM_CATACLYSM');
export const nextRandomPandaria = createAction('NEXT_RANDOM_PANDARIA');
export const nextRandomDraenor = createAction('NEXT_RANDOM_DRAENOR');
export const nextRandomLegion = createAction('NEXT_RANDOM_LEGION');
export const nextRandomBFA = createAction('NEXT_RANDOM_BFA');
export const nextRandomShadowLands = createAction('NEXT_RANDOM_SHADOWLANDS');

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
    [nextRandomCataclysm]: function (state) {
        state.newRandomCata = setNewRandom([dataCata])
    },
    [nextRandomPandaria]: function (state) {
        state.newRandomPand = setNewRandom([dataPand])
    },
    [nextRandomDraenor]: function (state) {
        state.newRandomDraenor = setNewRandom([dataDraenor])
    },
    [nextRandomLegion]: function (state) {
        state.newRandomLegion = setNewRandom([dataLegion])
    },
    [nextRandomBFA]: function (state) {
        state.newRandomBfa = setNewRandom([dataBfa])
    },
    [nextRandomShadowLands]: function (state) {
        state.newRandomSl = setNewRandom([dataSL])
    },
})