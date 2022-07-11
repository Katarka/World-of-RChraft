import React, {useContext} from "react";
import style from "./Rightbar.module.css"

const Rightbar = (props) => {
    const [rightBarState] = useContext(props.WorContext)
    let historyElement = rightBarState.rightBarHistory.map(el => <div className={style.historyItem}>{el}</div>)
    return(
        <div className={style.header}>
            <div>
                {historyElement}
            </div>
        </div>
    )
}

export default Rightbar