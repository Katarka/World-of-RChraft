// import {dataClassic} from "../data/dataClassic";
// import {dataBC} from "../data/dataBc";
// import {dataWotlk} from "../data/dataWotlk";
// import setNewRandom from "../function/random";
// import {dataCata} from "../data/dataCata";
//
// const NEXT_RANDOM_CLASSIC = 'NEXT_RANDOM_CLASSIC';
// const NEXT_RANDOM_BC = 'NEXT_RANDOM_BC';
// const NEXT_RANDOM_WOTLK = 'NEXT_RANDOM_WOTLK';
// const NEXT_RANDOM_CATA = 'NEXT_RANDOM_CATA';
//
// const initialState = {
//     newRandomClassic: ["Let's Start!"],
//     newRandomBC: ["Let's Start!"],
//     newRandomWotlk: ["Let's Start!"],
//     newRandomCata: ["Let's Start!"],
//     rightBarHistory: [],
// };
//
// const randomReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case NEXT_RANDOM_CLASSIC:
//             return {
//                 ...state,
//                 newRandomClassic: setNewRandom([dataClassic]),
//                 rightBarHistory: state.rightBarHistory.concat([state.newRandomClassic]),
//             }
//         case NEXT_RANDOM_BC:
//             return {
//                 ...state,
//                 newRandomBC: setNewRandom([dataBC]),
//                 rightBarHistory: state.rightBarHistory.concat([state.newRandomBC]),
//             }
//         case NEXT_RANDOM_WOTLK:
//             return {
//                 ...state,
//                 newRandomWotlk: setNewRandom([dataWotlk]),
//                 rightBarHistory: state.rightBarHistory.concat([state.newRandomWotlk]),
//             }
//         case NEXT_RANDOM_CATA:
//             return {
//                 ...state,
//                 newRandomCata: setNewRandom([dataCata]),
//                 rightBarHistory: state.rightBarHistory.concat([state.newRandomCata]),
//             }
//         default:
//             return state;
//     }
// };
//
// export const nextRandomClassic = () => ({type: NEXT_RANDOM_CLASSIC});
// export const nextRandomBC = () => ({type: NEXT_RANDOM_BC});
// export const nextRandomWotlk = () => ({type: NEXT_RANDOM_WOTLK});
// export const nextRandomCata = () => ({type: NEXT_RANDOM_CATA});
//
// export default randomReducer;
//     // if (action.type === "DEFAULT_RANDOM_CLASSIC") {
//     //     return {
//     //         ...state,
//     //         newRandomClassic: state.newRandom = "Let's Start again"
//     //     };
//     // }
//     // if (action.type === "DEFAULT_RANDOM_BC") {
//     //     return {
//     //         ...state,
//     //         newRandomBC: state.newRandom = "Let's Start again"
//     //     };
//     // }
//     // if (action.type === "DEFAULT_RANDOM_WOTLK") {
//     //     return {
//     //         ...state,
//     //         newRandomWotlk: state.newRandom = "Let's Start again",
//     //     };
//     // }

