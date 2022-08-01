import React, {useContext} from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Leftbar from "../NavibarRanomize/Leftbar";
import Rightbar from "../Rightbar/Rightbar";
import elf from "../../../assets/svg/elf.svg";
import {logoA, logoB} from "../../../context/wor";


const BurningCrusade = ({WorContext}) => {
    const [BCState, dispatch] = useContext(WorContext)
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>
                <div className={style.content}>
                    <div className={style.backText}>
                        <div>
                            <h1 className={style.h1}>{BCState.newRandomBC.join('\n')}</h1>
                        </div>
                        <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_BC"})}>Go
                        </button>
                    </div>
                    <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                        {BCState.newRandomBC[0] === 'Alliance' ? logoA : ''}
                        {BCState.newRandomBC[0] === 'Horde' ? logoB : ''}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
                {/*<Rightbar WorContext={WorContext}/>*/}
            </div>
        </>
    )
}

export default BurningCrusade