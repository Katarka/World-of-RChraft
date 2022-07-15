import React, {useContext} from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Rightbar from "../Rightbar/Rightbar";
import Leftbar from "../NavibarRanomize/Leftbar";
import elf from "../../../assets/svg/elf.svg";

const Wotlk = ({WorContext}) => {
    const [wotlkState, dispatch] = useContext(WorContext)
    delay = setTimeout()
    return (
        <>
            <div className={style.classic}>
                <Leftbar/>
                <div className={style.content}>
                    <div className={style.backText}>
                        <div>
                            <div className={style.h1}>{wotlkState.newRandomWotlk}</div>
                        </div>
                        <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_WOTLK"})}>Go
                        </button>
                    </div>
                    <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
            </div>
        </>
    )
}

export default Wotlk