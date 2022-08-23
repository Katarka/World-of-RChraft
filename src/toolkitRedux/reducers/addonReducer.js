import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    addon: 'Classic'
};

export const Classic = createAction('CLASSIC');
export const Bc = createAction('BC');
export const Wotlk = createAction('WOTLK');
export const Cata = createAction('CATA');
export const Pand = createAction('PANDARIA');
export const Draenor = createAction('DRAENOR');
export const Legion = createAction('LEGION');
export const Bfa = createAction('BFA');
export const Sl = createAction('SHADOWLANDS');


export default createReducer(initialState, {
    [Classic]: function (state) {
        state.addon = 'Classic'
    },
    [Bc]: function (state) {
        state.addon = 'Bc'
    },
    [Wotlk]: function (state) {
        state.addon = 'Lich'
    },
    [Cata]: function (state) {
        state.addon = 'Cata'
    },
    [Pand]: function (state) {
        state.addon = 'Pand'
    },
    [Draenor]: function (state) {
        state.addon = 'Draenor'
    },
    [Legion]: function (state) {
        state.addon = 'Legion'
    },
    [Bfa]: function (state) {
        state.addon = 'Bfa'
    },
    [Sl]: function (state) {
        state.addon = 'Sl'
    },
})