import React from "react";
import random from "../../function/random";
import s from './classic.module.css'

const classic = () => {
    return(
    <div className={s.classic}>
        {random}
    </div>
    )
}

export default classic