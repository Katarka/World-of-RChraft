import React from "react";
import style from './classic.module.css'
import random from "../../function/random";

const classic = () => {
    return(
        <div className={style.classic}>
            {random}
        </div>
)
}

export default classic