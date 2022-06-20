import React, {useState} from "react";
import style from './Wotlk.module.css'

// const initialState = {
//     currentRandomIndex: 0,
//     newRandom: [],
// };
//
// const reducer = (state, action) => {
//     if (action.type === "NEXT_RANDOM") {
//         return {
//             ...state,
//             currentRandomIndex: state.currentRandomIndex + 1,
//         };
//     }
//     return state;
// };

const Wotlk = (props) => {

    const [getState, setState] = useState("Let's start")

    const handleClick = () => {
        setState(props.setNewRandom)
    }
    const handleClickReset = () => {
        setState("Let's start")
    }
    return (
        <div className={style.wotlk}>
            <div className={style.text}>
                <h1>{getState}</h1>
            </div>
            <div className={style.buttonPosition}>
                <button className={style.button} onClick={handleClick}>Go</button>
                <button className={style.button} onClick={handleClickReset}>Reset</button>
            </div>
        </div>
    )
}

export default Wotlk