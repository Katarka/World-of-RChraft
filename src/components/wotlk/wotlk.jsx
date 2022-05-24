import React, {useState} from "react";
import style from './wotlk.module.css'
import store, {getRandom} from "../../store/storeWotlk";
import getRandomValueFromArray from "../../function/random";


const Wotlk = () => {
    const faction = getRandomValueFromArray(store.faction)
    const race = getRandomValueFromArray(store.race[faction])
    const classRace = getRandomValueFromArray(store.class[race])
    const spec = getRandomValueFromArray(store.spec[classRace])
    const [getState, setState] = useState("getRandom")
    console.log(getState)
    const handleClick = () => {
        // const newRandom = () => getRandom.map(getRandom => getRandom)
        const newRandom = [
            faction,
            race,
            classRace,
            spec
        ]
        setState(newRandom)
    }
    console.log(handleClick)
    console.log(setState)
    return (
        <div className={style.wotlk}>
            <div className={style.text}>

                {getRandom.map((getState) => <h1>{getState}</h1>)}
                {console.log(getState)}
                <button className={style.button} onClick={handleClick}>Go</button>
            </div>
        </div>
    )
}

export default Wotlk