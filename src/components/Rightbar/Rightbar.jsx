import React, {useState} from "react";
import style from "./Rightbar.module.css"


const Rightbar = (props) => {
    const [getState, setState] = useState("History")
    return(
        <div className={style.header}>
            <div>{getState}</div>
        </div>
    )
}

export default Rightbar