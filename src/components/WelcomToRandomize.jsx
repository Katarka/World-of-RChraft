import React from "react";
import styles from '../../src/components/styles/styles.module.css'
import Leftbar from "./Leftbar/Leftbar";
import Footer from "./Main/Footer";

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