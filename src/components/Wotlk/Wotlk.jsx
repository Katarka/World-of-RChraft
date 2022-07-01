import React, {useContext} from "react";
import style from './Wotlk.module.css'

const Wotlk = ({WorContext}) => {
    const [wotlkState, dispatch] = useContext(WorContext)
    console.log(wotlkState.newRandomWotlk)
    return (
        <div className={style.wotlk}>
            <div className={style.text}>
                <h1>{wotlkState.newRandomWotlk}</h1>
                {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_WOTLK"})}>Reset</button>*/}
            </div>
            <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_WOTLK"})}>Go</button>
            <div className={style.icon}>Wrath of the Lich King</div>
        </div>
    )
}

export default Wotlk