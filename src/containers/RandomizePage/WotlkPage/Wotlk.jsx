import React, {useContext} from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Rightbar from '../Rightbar/Rightbar';
import Leftbar from '../NavibarRanomize/Leftbar';
import elf from '../../../assets/svg/elf.svg';
import {logoA, logoB} from "../../../redux/redux-store";

const Wotlk = ({WorContext}) => {
    const [wotlkState, dispatch] = useContext(WorContext)
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>

                <div className={style.content}>
                    <div className={style.backText}>
                        <div>
                            <h1 className={style.h1}>{wotlkState.newRandomWotlk.join('\n')}</h1>
                        </div>
                        <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_WOTLK"})}>Go
                        </button>
                    </div>
                    <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                        {wotlkState.newRandomWotlk[0] === 'Alliance' ? logoA : ''}
                        {wotlkState.newRandomWotlk[0] === 'Horde' ? logoB : ''}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
            </div>
        </>
    )
}

export default Wotlk