import React, {useState} from "react";
import style from './bc.module.css'
import store from "../../store/storeBc";
import getRandomValueFromArray from "../../function/random";

const Bc = () => {
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
        let setNewRandom = newRandom.map((newRandom) => <h1>{newRandom}</h1>)
        setState(setNewRandom)
    }
    const handleClickReset = () => {
        setState("Let's start")
    }
    return (
        <div className={style.bc}>
            <div className={style.text}>
                <h1>{getState}</h1>
                <button className={style.button} onClick={handleClick}>Go</button>
                <button className={style.button} onClick={handleClickReset}>Reset</button>
            </div>
        </div>
    )
}

export default Bc