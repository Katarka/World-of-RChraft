import React from "react";
import style from './wotlk.module.css'
import {getRandom} from "../../store/storeWotlk";

const wotlk = () => {

    return (
        <form className={style.wotlk}>
            <div className={style.text}>
                {getRandom.map(getRandom => (
                    <h1>{getRandom}</h1>
                    ))}
                <button className={style.button}>Go</button>
            </div>
        </form>
    )
}

export default wotlk