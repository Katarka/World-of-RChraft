import React, {useContext} from "react";
import style from './Wotlk.module.css'
import Rightbar from "../Rightbar/Rightbar";
import Leftbar from "../Leftbar/Leftbar";

const Wotlk = ({WorContext}) => {
    const [wotlkState, dispatch] = useContext(WorContext)
    console.log(wotlkState.newRandomWotlk)
    return (
        <div className={style.wotlk}>
            <Leftbar/>
            <div>
                <div className={style.text}>
                    <h1>{wotlkState.newRandomWotlk}</h1>
                    {/*<button className={style.button} onClick={() => dispatch({type: "DEFAULT_RANDOM_WOTLK"})}>Reset</button>*/}
                </div>
                <button className={style.button} onClick={() => dispatch({type: "NEXT_RANDOM_WOTLK"})}>Go</button>
            </div>
            {/*<img src='https://wow.zamimg.com/uploads/blog/images/27174-wrath-of-the-lich-king-logo-added-in-classic-era-update.png'/>*/}
            <Rightbar WorContext={WorContext}/>
        </div>
    )
}

export default Wotlk