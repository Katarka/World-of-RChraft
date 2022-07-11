import React, {useContext} from "react";
import style from './BurningCrusade.module.css'
import Leftbar from "../Leftbar/Leftbar";
import Rightbar from "../Rightbar/Rightbar";

const BurningCrusade = ({WorContext}) => {
    const [BCState, dispatch] = useContext(WorContext)
    return (
        <div className={style.bc}>
            <Leftbar/>
            <div>
                <div className={style.text}>
                    <h1>{BCState.newRandomBC}</h1>
                    {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_BC"})}>Reset</button>*/}
                </div>
                <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_BC"})}>Go</button>
            </div>
            <Rightbar WorContext={WorContext}/>
        </div>
    )
}

export default BurningCrusade