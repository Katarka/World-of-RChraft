import React from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Leftbar from "../NavibarRanomize/Leftbar";
import elf from "../../../assets/svg/elf.svg";
import {logoA, logoB} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {nextRandomBC} from "../../../redux/randomizeReducer";


const BurningCrusade = () => {
    const newRandomBC = useSelector(state => state.random.newRandomBC)
    const dispatch = useDispatch()
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>
                <div className={style.content}>
                    <div className={style.backText}>
                        <div>
                            <h1 className={style.h1}>{newRandomBC.join('\n')}</h1>
                        </div>
                        <button className={style.button} onClick={() => dispatch(nextRandomBC())}>Go
                        </button>
                    </div>
                    <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                        {newRandomBC[0] === 'Alliance' ? logoA : ''}
                        {newRandomBC[0] === 'Horde' ? logoB : ''}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
                {/*<Rightbar WorContext={WorContext}/>*/}
            </div>
        </>
    )
}

export default BurningCrusade