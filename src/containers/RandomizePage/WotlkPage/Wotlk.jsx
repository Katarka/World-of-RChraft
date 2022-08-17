import React from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Leftbar from '../NavibarRanomize/Leftbar';
import elf from '../../../assets/svg/elf.svg';
import {logoA, logoB} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {nextRandomWotlk} from "../../../redux/randomizeReducer";

const Wotlk = ({WorContext}) => {
    const newRandomWotlk = useSelector(state => state.random.newRandomWotlk)
    const dispatch = useDispatch()
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>

                <div className={style.content}>
                    <div className={style.backText}>
                        <div>
                            <h1 className={style.h1}>{newRandomWotlk.join('\n')}</h1>
                        </div>
                        <button className={style.button} onClick={() => dispatch(nextRandomWotlk())}>Go
                        </button>
                    </div>
                    <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                        {newRandomWotlk[0] === 'Alliance' ? logoA : ''}
                        {newRandomWotlk[0] === 'Horde' ? logoB : ''}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
            </div>
        </>
    )
}

export default Wotlk