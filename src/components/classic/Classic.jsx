import React, {useState} from "react";
import style from './Classic.module.css'
import store from "../../store/storeClassic";
import getRandomValueFromArray from "../../function/random";

const Classic = () => {
    const faction = getRandomValueFromArray(store.faction)
    const race = getRandomValueFromArray(store.race[faction])
    const classRace = getRandomValueFromArray(store.class[race])
    const spec = getRandomValueFromArray(store.spec[classRace])
    const [getState, setState] = useState("Let's start")
    const handleClick = () => {
        const newRandom = [
            faction,
            race,
            classRace,
            spec
        ]
        let setNewRandom = newRandom.map((newRandom) => <pre>{newRandom}</pre>)
        setState(setNewRandom)
    }
    const handleClickReset = () => {
        setState("Let's start")
    }
    return (
        <div className={style.classic}>
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

export default Classic