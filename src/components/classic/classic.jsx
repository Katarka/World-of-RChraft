import React from "react";
import style from './classic.module.css'
import store from "../../store/storeClassic";
import {getRandomValueFromArray} from "../../function/random";

const classic = (props) => {
    const faction = getRandomValueFromArray(store.faction)
    const race = getRandomValueFromArray(store.race[faction])
    const classRace = getRandomValueFromArray(store.class[race])
    const spec = getRandomValueFromArray(store.spec[classRace])
    return (
        <form className={style.classic}>
            <div className={style.text}>
                <div>
                    <h1>{faction}</h1>
                    <h1>{race}</h1>
                    <h1>{classRace}</h1>
                    <h1>{spec}</h1>
                </div>
                <button className={style.button}>Go Go Go</button>
            </div>
        </form>
    )
}

export default classic