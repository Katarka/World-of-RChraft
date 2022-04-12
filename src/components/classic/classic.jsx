import React from "react";
import style from './classic.module.css'
import store from "../../store/storeClassic";

const classic = (props) => {
    const random = () => {
        const getRandomValueFromArray = arr => arr[Math.floor(Math.random() * arr.length)]
        const faction = getRandomValueFromArray(store.faction)
        const race = getRandomValueFromArray(store.race[faction])
        const classPers = getRandomValueFromArray(store.class[race])
        const spec = getRandomValueFromArray(store.spec[classPers])
        return (
            <div className={style.text}>
                <div>
                    <h1>{faction}</h1>
                </div>
                <div>
                    <h1>{race}</h1>
                </div>
                <div>
                    <h1>{classPers}</h1>
                </div>
                <div>
                    <h1>{spec}</h1>
                </div>
            </div>
        )
    }
    return (
        <form className={style.classic}>
            <div>
                {random()}
                <button className={style.button} onClick={random}>Ready</button>
            </div>
        </form>
    )
}

export default classic