import React, { useEffect, useState } from 'react';
import cn from "classnames";

import { Race, RaceLogo, PlayableClass, Faction } from '../../../assets/imageRandomize';

import styles from './RandomImg.module.css'

const RandomImg = ({
    faction,
    race,
    playebleClass,
    spec
}) => {
    const [factionImg, setFactionImg] = useState(Faction[0].img);
    const [raceImg, setRaceImg] = useState(Race[0].img);
    const [raceLogoImg, setRaceLogoImg] = useState(RaceLogo[0].img);
    const [playableClassImg, setPlayebleClassImg] = useState(PlayableClass[0].img);
    const [specImg, setSpecImg] = useState('');

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
            let raceConcat = race !== undefined ? race.split(' ').join('') : '';
            let res = element.text === raceConcat ? element : ''
            return res
        })
        const FilteredRaceImg = RaceLogo.filter(el => {
            el.key = el.text
            let raceConcat = race !== undefined ? race.split(' ').join('') : '';
            let res = el.text === raceConcat ? el : '';
            return res
        })
        if (FilteredRace[0] !== undefined && FilteredRaceImg[0] !== undefined) {
            setRaceImg(FilteredRace[0].img)
            setRaceLogoImg(FilteredRaceImg[0].img)
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
        <div className={styles.imagesBlock}>
            <div className={styles.bigImg}>
                <img className={styles.img} src={raceImg} alt="race" />
                <img className={styles.factionLogo} src={factionImg} alt="faction" />
            </div>

            <div className={styles.imagesCol}>
                <img className={styles.raceLogo} src={raceLogoImg} alt="faction" />
                <img className={styles.classLogo} src={playableClassImg} alt="Class" />
            </div>
        </div>
    )
}



export default RandomImg;