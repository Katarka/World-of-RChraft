import React, {useContext} from "react";
import style from "./Rightbar.module.css"

const Rightbar = ({WorContext}) => {
    const [rightBarState] = useContext(WorContext)
    
    console.log(rightBarState.rightBarHistory)
    return(
        <div className={style.header}>
                {rightBarState.rightBarHistory.map(el => (
                    <div className={style.historyItem}>
                        <p>{el[0]}</p>
                        <p>{el[1]}</p>
                        <p>{el[2]}</p>
                        <p>{el[3]}</p>
                    </div>
                ))}
        </div>
    )
}

export default Rightbar