import React, {useContext} from "react";
import style from "./Rightbar.module.css"

const Rightbar = ({WorContext}) => {
    const [rightBarState] = useContext(WorContext)
    console.log(rightBarState)
    return(
        <div className={style.header}>
                <h1>{rightBarState.rightBarHistory}</h1>
        </div>
    )
}

export default Rightbar