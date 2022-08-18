import randomReducer from "./randomizeReducer";
import {applyMiddleware, combineReducers} from "redux";
import { legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk";

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

