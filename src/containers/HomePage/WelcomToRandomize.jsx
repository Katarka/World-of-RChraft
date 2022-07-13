import React from "react";
import styles from '../../styles/styles.module.css'
import Leftbar from "../RandomizePage/NavibarRanomize/Leftbar";
import Footer from "./Footer";

const WelcomToRandomize = () => {
    return (
        <>
            <div className={styles.classic}>
            <Leftbar/>
                <span className={styles.welcom}>
                <h1>Найди своего персонажа</h1>
                    </span>
            </div>
            <Footer/>
        </>
    )
}

export default WelcomToRandomize