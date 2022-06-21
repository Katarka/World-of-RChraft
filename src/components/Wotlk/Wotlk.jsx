import React, {useContext} from "react";
import style from './Wotlk.module.css'
import {WorContext} from "../../contex/wor";

const Wotlk = () => {
    const [wotlkState, dispatch] = useContext(WorContext)
    return (
        <div className={style.wotlk}>
            <div className={style.text}>
                <h1>{wotlkState.newRandomWotlk}</h1>
            </div>
            <div className={style.buttonPosition}>
                <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_WOTLK"})}>Go</button>
                <button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM"})}>Reset</button>
            </div>
        </div>
    )
}

export default Wotlk