import React, {useContext, useState} from "react";
import style from './Classic.module.css'
import {WorContext} from "../../contex/wor";

const Classic = () => {
    const [classicState, dispatch] = useContext(WorContext)
    return (
        <div className={style.classic}>
            <div className={style.text}>
                <h1>{classicState.newRandomClassic}</h1>
            </div>
            <div className={style.buttonPosition}>
                <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_CLASSIC"})}>Go</button>
                <button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM"})}>Reset</button>
            </div>
        </div>
    )
}

export default Classic