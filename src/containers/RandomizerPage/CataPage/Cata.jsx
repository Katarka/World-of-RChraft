import React from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Leftbar from '../../../components/RandomizerPage/NavigationRandom/NavigationRandom';
import elf from '../../../assets/svg/elf.svg';
import {useDispatch, useSelector} from "react-redux";
import {nextRandomCataclysm} from "../../../toolkitRedux/toolkitReducer";


const Cataclysm = () => {
    const newRandomCataclysm = useSelector(state => state.toolkit.newRandomCata)
    const dispatch = useDispatch()
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>
                <div className={style.content}>
                    <div className={style.backText}>
                        <div>
                            <h1 className={style.h1}>{newRandomCataclysm.join('\n')}</h1>
                        </div>
                        <button className={style.button} onClick={() => dispatch(nextRandomCataclysm())}>Go
                        </button>
                    </div>
                    <img className={style.img} src={elf} alt='#'/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
            </div>
        </>
    )
}

export default Cataclysm