import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLogo } from "../../../styles/changeImageRandom";
import NavigationRandom from "../../../components/RandomizerPage/NavigationRandom";
import elf from "../../../assets/svg/elf.svg"
import { Race, PlayableClass, Faction } from '../../../assets/imageRandomize'
import style from './ClassicPage.module.css';
import {nextRandomClassic} from "../../../toolkitRedux/toolkitReducer";

const Classic = () => {
    const [faction, setFaction] = useState('');
    const [race, setRace] = useState('');
    const [playebleClass, setPlayebleClass] = useState('');
    const [spec, setSpec] = useState('');
    const [factionImg, setFactionImg] = useState(Faction[0].img);
    const [raceImg, setRaceImg] = useState('');
    const [playableClassImg, setPlayebleClassImg] = useState(PlayableClass[0].img);
    const [specImg, setSpecImg] = useState('');

    const newRandomClassic = useSelector(state => state.toolkit.newRandomClassic)

    const dispatch = useDispatch()

    const requestRandom = () => {
        dispatch(nextRandomClassic());
    }

    useEffect(() => {
        setFaction(newRandomClassic.faction);
        setRace(newRandomClassic.race);
        setPlayebleClass(newRandomClassic.classRace);
        setSpec(newRandomClassic.spec);



        console.log(newRandomClassic);
    }, [newRandomClassic])

    useEffect(() => {
        // фильтрую массив картинок при каждом новом рандоме по фракции

        const FilteredFaction = Faction.filter(element => {
            element.key = element.text
            // console.log(element, 'element in filter');
            // console.log(faction, 'faction in filter');
            let res = element.text === faction ? element : '';
            return res

        })
        if (FilteredFaction[0] !== undefined) {
            setFactionImg(FilteredFaction[0].img)
        }


        // console.log(factionImg, 'log after ?');
        // console.log(FilteredFaction, 'FilteredFaction');
        // console.log(FilteredFaction[0], 'FilteredFaction 0');
    }, [faction])

    useEffect(() => {
        // фильтрую массив картинок при каждом новом рандоме по рассе
        const FilteredRace = Race.filter(element => {
            element.key = element.text
            // console.log(element,'element in filter');
            let raceContat = race !== undefined ? race.split(' ').join('') : '';
            let res = element.text === raceContat ? element : ''
            return res
        })
        if (FilteredRace[0] !== undefined) {
            setRaceImg(FilteredRace[0].img)
        }
    }, [race])

    useEffect(() => {
        // фильтрую массив картинок при каждом новом рандоме по классу
        const FilteredClass = PlayableClass.filter(element => {
            element.key = element.text
            // console.log(element,'element in filter');
            let playClass = playebleClass !== undefined ? playebleClass.split(' ').join('') : '';
            let res = element.text === playClass ? element : ''
            return res
        })
        if (FilteredClass[0] !== undefined) {
            setPlayebleClassImg(FilteredClass[0].img)
        }
    }, [playebleClass])

    return (
        <>
            <div className={style.classic}>
                <NavigationRandom />
                <div className={style.content}>
                    <div className={style.backText}>
                        <div className={style.blockRandomValue}>
                            <div className={style.h1}>
                            <p>{faction}</p>
                            <p>{race}</p>
                            <p>{playebleClass ? playebleClass : 'Let`s Start!'}</p>
                            <p>{spec}</p>
                            </div>
                        </div>
                        <button className={style.button} onClick={requestRandom}>Go</button>
                    </div>
                    <div className={style.imagesBlock}>
                        <div className={style.imagesCol}>
                            <img className={style.img} src={raceImg ? raceImg : elf} alt='#' />
                        </div>
                        <div className={style.imagesCol}>
                            <img className={style.factionLogo} src={factionImg} alt="faction" />
                            <img className={style.classLogo} src={playableClassImg} alt="Class" />
                        </div>
                    </div>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                        {/* {changeLogo([newRandomClassic])} */}
                        
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
            </div>
        </>
    )
}

export default Classic