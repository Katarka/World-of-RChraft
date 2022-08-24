import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {nextRandomClassic, nextRandomBC, nextRandomWotlk, nextRandomCataclysm} from "../../toolkitRedux";
import NavigationRandom from "../../components/RandomizerPage/NavigationRandom";
import RandomImg from "../../components/RandomizerPage/RandomImg";

import styles from "./RandomizerPage.module.css";


const RandomizerPage = ({addon}) => {
    const [faction, setFaction] = useState('');
    const [race, setRace] = useState('');
    const [playebleClass, setPlayebleClass] = useState('');
    const [spec, setSpec] = useState('');


    const newRandomClassic = useSelector(state => state.randomsReducer.newRandomClassic)
    const newRandomBc = useSelector(state => state.randomsReducer.newRandomBC)
    const newRandomWotlk = useSelector(state => state.randomsReducer.newRandomWotlk)
    const newRandomCata = useSelector(state => state.randomsReducer.newRandomCata)

    const dispatch = useDispatch()

    const requestRandom = () => {
        switch (addon) {
            case 'Classic':
                return dispatch(nextRandomClassic());
            case 'Bc':
                return dispatch(nextRandomBC());
            case 'Lich':
                return dispatch(nextRandomWotlk());
            case 'Cata':
                return dispatch(nextRandomCataclysm());
            default:
        }
    }

    useEffect(() => {
            switch (addon) {
                case 'Classic':
                    setFaction(newRandomClassic.faction);
                    setRace(newRandomClassic.race);
                    setPlayebleClass(newRandomClassic.classRace);
                    setSpec(newRandomClassic.spec);
                    break
                case 'Bc':
                    setFaction(newRandomBc.faction);
                    setRace(newRandomBc.race);
                    setPlayebleClass(newRandomBc.classRace);
                    setSpec(newRandomBc.spec);
                    break
                case 'Lich':
                    setFaction(newRandomWotlk.faction);
                    setRace(newRandomWotlk.race);
                    setPlayebleClass(newRandomWotlk.classRace);
                    setSpec(newRandomWotlk.spec);
                    break
                case 'Cata':
                    setFaction(newRandomCata.faction);
                    setRace(newRandomCata.race);
                    setPlayebleClass(newRandomCata.classRace);
                    setSpec(newRandomCata.spec);
                    break
        }
    }, [newRandomClassic, newRandomBc, newRandomWotlk, newRandomCata])
    debugger
    return (
        <>
            <div className={styles.classic}>
                <NavigationRandom/>

                <div className={styles.content}>
                    <div className={styles.backText}>
                        <div className={styles.blockRandomValue}>
                            <p>{faction}</p>
                            <p>{race}</p>
                            <p>{playebleClass ? playebleClass : 'Let`s Start!'}</p>
                            <p>{spec}</p>
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