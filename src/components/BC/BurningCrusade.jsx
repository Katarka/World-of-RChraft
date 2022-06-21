import React, {useContext, useState} from "react";
import style from './BurningCrusade.module.css'
import {WorContext} from "../../contex/wor";

const BurningCrusade = (props) => {
    const [BCState, dispatch] = useContext(WorContext)
    return (
        <div className={style.bc}>
            <div className={style.text}>
                <h1>{BCState.newRandomBC}</h1>
            </div>
            <div className={style.buttonPosition}>
                <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_BC"})}>Go</button>
                <button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM"})}>Reset</button>
            </div>
        </div>
    )
}

export default BurningCrusade