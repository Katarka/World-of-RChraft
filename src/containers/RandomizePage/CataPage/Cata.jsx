import React from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Leftbar from '../NavibarRanomize/Leftbar';
import elf from '../../../assets/svg/elf.svg';
import {changeLogo} from "../../../styles/changeImageRandom";
import {useDispatch, useSelector} from "react-redux";
import {nextRandomCata} from "../../../redux/randomizeReducer";


const Cata = () => {
    const newRandomCata = useSelector(state => state.random.newRandomCata)
    const dispatch = useDispatch()
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>
                <div className={style.content}>
                    <div className={style.backText}>
                        <div>
                            <h1 className={style.h1}>{newRandomCata.join('\n')}</h1>
                        </div>
                        <button className={style.button} onClick={() => dispatch(nextRandomCata())}>Go
                        </button>
                    </div>
                    <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                        {changeLogo([newRandomCata])}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
            </div>
        </>
    )
}

export default Cata