import React, { useEffect, useState} from 'react';
import { Race, PlayableClass, Faction } from '../../../assets/imageRandomize';
import elf from "../../../assets/svg/elf.svg";

import styles from './RandomImg.module.css'

const RandomImg = ({
    faction,
    race,
    playebleClass,
    spec
}) => {
    const [factionImg, setFactionImg] = useState(Faction[0].img);
    const [raceImg, setRaceImg] = useState('');
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
            <div className={styles.imagesBlock}>
                <div className={styles.imagesCol}>
                    <img className={styles.img} src={raceImg ? raceImg : elf} alt='#' />
                </div>
                <div className={styles.imagesCol}>
                    <img className={styles.factionLogo} src={factionImg} alt="faction" />
                    <img className={styles.classLogo} src={playableClassImg} alt="Class" />
                </div>
            </div>
    )
}



export default RandomImg;