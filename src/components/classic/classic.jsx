import React from "react";
import style from './classic.module.css'
import store from "../../store/storeClassic";

const classic = (props) => {
    const random = () => {
        //Рандом фракции 0 || 1
        let randomFact = Math.floor(Math.random() * store.faction.length)
        let fact = store.faction[randomFact]
        // console.log(fact)
        //Рандом расы по значению фракции
        let randomCharHorde = Math.floor(Math.random() * store.race[fact].length)
        //console.log(store.race.Horde[raceChar1])
        let randomCharAlliance = Math.floor(Math.random() * store.race[fact].length)
        //console.log(store.race.Alliance[raceChar2])
        let raceChar = randomFact ? store.race[fact][randomCharHorde]
            : store.race[fact][randomCharAlliance]
        // console.log(raceChar)
        //Рандом класса по значению фракции
        let randomClass = Math.floor(Math.random() * store.class[raceChar].length)
        let classR = store.class[raceChar][randomClass]
        // console.log(classR)
        //Рандом спека по значению класса
        let randomSpec = Math.floor(Math.random() * store.spec[classR].length)
        let spec = store.spec[classR][randomSpec]
        // console.log(spec)
        return (
            <div className={style.text}>
                <div>
                    <h1>{fact}</h1>
                </div>
                <div>
                    <h1>{raceChar}</h1>
                </div>
                <div>
                    <h1>{classR}</h1>
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