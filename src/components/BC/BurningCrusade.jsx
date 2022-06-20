import React, {useState} from "react";
import style from './BurningCrusade.module.css'

const BurningCrusade = (props) => {

    const [getState, setState] = useState("Let's start")

    const handleClick = (faction, race, classRace, spec) => {
        const newRandom = [
            faction = props.getRandom(props.data.faction),
            race = props.getRandom(props.data.race[faction]),
            classRace = props.getRandom(props.data.class[race]),
            spec = props.getRandom(props.data.spec[classRace])
        ]
        let setNewRandom = newRandom.map((newRandom) => <pre>{newRandom}</pre>)
        setState(setNewRandom)
    }
    const handleClickReset = () => {
        setState("Let's start")
    }
    return (
        <div className={style.bc}>
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

export default BurningCrusade