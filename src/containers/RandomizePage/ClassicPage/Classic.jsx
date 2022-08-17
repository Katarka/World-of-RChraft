import React from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Leftbar from "../NavibarRanomize/Leftbar";
import elf from "../../../assets/svg/elf.svg"
import {logoA, logoB} from "../../../redux/redux-store";
import {nextRandomClassic} from "../../../redux/randomizeReducer";
import {useDispatch, useSelector} from "react-redux";

const Classic = () => {
    const newRandomClassic = useSelector(state => state.random.newRandomClassic)
    const dispatch = useDispatch()
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>
                <div className={style.content}>
                <div className={style.backText}>
                    <div>
                        <h1 className={style.h1}>{newRandomClassic.join('\n')}</h1>
                    </div>
                    <button className={style.button} onClick={() => dispatch(nextRandomClassic())}>Go</button>
                </div>
                <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                        {newRandomClassic[0] === 'Alliance' ? logoA : ''}
                        {newRandomClassic[0] === 'Horde' ? logoB : ''}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
                {/*<Rightbar WorContext={WorContext}/>*/}
            </div>
        </>
    )
}

export default Classic