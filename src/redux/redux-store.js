import style from "../styles/stylesRandomize.module.css";
import Alogo from "../assets/img/ALogo.png";
import Hlogo from "../assets/img/HLogo.png";
import randomReducer from "./randomizeReducer";
import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk";

export const logoA = <img className={style.imgLogo} src={Alogo}/>
export const logoB = <img className={style.imgLogo} src={Hlogo}/>

let reducers = combineReducers({
    random: randomReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store

// export const WorContext = createContext();
//
// export const WorProvider = ({children}) => {
//     const value = useReducer(reducer, initialState)
//     return <WorContext.Provider value={value}>
//         {children}
//     </WorContext.Provider>
// }

