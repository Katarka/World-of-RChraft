import React from "react";
import styles from "../../styles/stylesRandomize.module.css";
import Leftbar from "../RandomizePage/NavibarRanomize/Leftbar";


const Randomizer = () => {

    return (
        <>
            <div className={styles.classic}>
                <Leftbar/>
                <div className={styles.welcom}>
                <h1>Найди своего персонажа</h1>
                    </div>
            </div>
        </>
    )
}


export default Randomizer