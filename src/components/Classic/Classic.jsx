import React, {useContext} from "react";
import style from './Classic.module.css';
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";

const Classic = ({WorContext}) => {
    const [classicState, dispatch] = useContext(WorContext)
    return (
        <div className={style.classic}>
            <Leftbar/>
            <div>
                <div className={style.text}>
                    <h1>{classicState.newRandomClassic}</h1>
                    {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_CLASSIC"})}>Reset</button>*/}
                </div>
                <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_CLASSIC"})}>Go</button>
            </div>
            <Rightbar WorContext={WorContext}/>
        </div>
    )
}

export default Classic