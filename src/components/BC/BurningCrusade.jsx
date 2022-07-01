import React, {useContext} from "react";
import style from './BurningCrusade.module.css'

const BurningCrusade = ({WorContext}) => {
    const [BCState, dispatch] = useContext(WorContext)
    return (
        <div className={style.bc}>
            <div>
                <div className={style.text}>
                    <h1>{BCState.newRandomBC}</h1>
                    {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_BC"})}>Reset</button>*/}
                </div>
                <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_BC"})}>Go</button>
            </div>
            <img src='http://wow.blizzwiki.ru/images/6/65/TBCLogo.png'/>
        </div>
    )
}

export default BurningCrusade