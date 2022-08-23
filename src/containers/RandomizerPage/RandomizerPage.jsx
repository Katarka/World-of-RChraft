import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { 
    nextRandomClassic, 
    nextRandomBC 
} from "../../toolkitRedux";
import NavigationRandom from "../../components/RandomizerPage/NavigationRandom";
import RandomImg from "../../components/RandomizerPage/RandomImg";

import styles from "./RandomizerPage.module.css";


const RandomizerPage = ({
    addon
}) => {
    const [faction, setFaction] = useState('');
    const [race, setRace] = useState('');
    const [playebleClass, setPlayebleClass] = useState('');
    const [spec, setSpec] = useState('');

    const newRandomClassic = useSelector(state => state.randomsReducer.newRandomClassic)
    const newRandomBc = useSelector(state => state.randomsReducer.newRandomBc)

    const dispatch = useDispatch()

    const requestRandom = () => {
        switch(addon){
            case 'Classic':return dispatch(nextRandomClassic());
            case 'Bc':return dispatch(nextRandomBC());
            default: dispatch(nextRandomClassic())
        }
        
    }

    useEffect(() => {
        setFaction(newRandomClassic.faction);
        setRace(newRandomClassic.race);
        setPlayebleClass(newRandomClassic.classRace);
        setSpec(newRandomClassic.spec);

    }, [newRandomClassic, newRandomBc])

    return (
        <>
            <div className={styles.classic}>
                <NavigationRandom />

                <div className={styles.content}>
                    <div className={styles.backText}>
                        <div className={styles.blockRandomValue}>
                            <div className={styles.h1}>
                            <p>{faction}</p>
                            <p>{race}</p>
                            <p>{playebleClass ? playebleClass : 'Let`s Start!'}</p>
                            <p>{spec}</p>
                            </div>
                        </div>
                        <button className={styles.button} onClick={requestRandom}>Go</button>
                    </div>
                    <RandomImg faction={faction} race={race} playebleClass={playebleClass} spec={spec}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
            </div>
        </>
    )
}


export default RandomizerPage