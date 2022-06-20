import React, {useState} from "react";
import style from "./Rightbar.module.css"

const Rightbar = (props) => {
    const [getState, setState] = useState(props.setNewRandom)
    const addNewRandom = () => {
    }
    return(
        <div className={style.header}>
                <pre>{getState}</pre>
        </div>
    )
}

export default Rightbar