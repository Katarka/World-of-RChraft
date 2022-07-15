import React, {useContext} from "react";
import style from '../../../styles/stylesRandomize.module.css';
import Leftbar from "../NavibarRanomize/Leftbar";
import elf from "../../../assets/svg/elf.svg"
import Rightbar from "../Rightbar/Rightbar";

const Classic = ({WorContext}) => {
    const [classicState, dispatch] = useContext(WorContext)
    return (
        <>

            <div className={style.classic}>
                <Leftbar/>
                <div className={style.content}>
                <div className={style.backText}>
                    <div>
                        <h1 className={style.h1}>{classicState.newRandomClassic}</h1>
                    </div>
                    <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_CLASSIC"})}>Go</button>
                </div>
                <img className={style.img} src={elf}/>
                    <div>
                        {/*<Rightbar WorContext={WorContext}/>*/}
                    </div>
                </div>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
                {/*<Rightbar WorContext={WorContext}/>*/}
            </div>
        </>
    )
}

export default Classic