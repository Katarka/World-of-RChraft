import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {nextRandomClassic, nextRandomBC, nextRandomWotlk, nextRandomCataclysm, nextRandomPandaria} from "../../toolkitRedux";
import NavigationRandom from "../../components/RandomizerPage/NavigationRandom";
import RandomImg from "../../components/RandomizerPage/RandomImg";

import styles from "./RandomizerPage.module.css";
import FilterRandom from "../../components/RandomizerPage/FilterRandom/FilterRandom";

const RandomizerPage = ({addon}) => {
    const [currentState, setCurrentState] = useState('')
    const currentPatch = useSelector(state => state.addonReducer.addon)
    const newRandomClassic = useSelector(state => state.randomsReducer.newRandomClassic)
    const newRandomBc = useSelector(state => state.randomsReducer.newRandomBC)
    const newRandomWotlk = useSelector(state => state.randomsReducer.newRandomWotlk)
    const newRandomCata = useSelector(state => state.randomsReducer.newRandomCata)
    const newRandomPand = useSelector(state => state.randomsReducer.newRandomPand)

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
            case 'Pand':
                return dispatch(nextRandomPandaria());
            default:
        }
    }

    useEffect(() => {
        switch (addon) {
            case 'Classic':
                return setCurrentState(newRandomClassic)
            case 'Bc':
                return setCurrentState(newRandomBc)
            case 'Lich':
                return setCurrentState(newRandomWotlk)
            case 'Cata':
                return setCurrentState(newRandomCata)
            case 'Pand':
                return setCurrentState(newRandomPand)
        }
    }, [newRandomClassic, newRandomBc, newRandomWotlk, newRandomCata, newRandomPand, currentPatch])
    
    return (
        <>
            <div className={styles.classic}>
                <NavigationRandom/>
                <FilterRandom/>
                <div className={styles.content}>            
                    <div className={styles.backText}>
                        <div className={styles.blockRandomValue}>
                            <div className={styles.h1}>
                                <p>{currentState.faction}</p>
                                <p>{currentState.race}</p>
                                <p>{currentState.classRace ? currentState.classRace : 'Let`s Start!'}</p>
                                <p>{currentState.spec}</p>
                            </div>
                        </div>
                        <button className={styles.button} onClick={requestRandom}>Go</button>
                    </div>
                    <RandomImg faction={currentState.faction} race={currentState.race} playebleClass={currentState.classRace} spec={currentState.spec}/>
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