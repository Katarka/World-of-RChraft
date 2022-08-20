import React from "react";
import NavigationRandom from "../../components/RandomizerPage/NavigationRandom";

// import styles from "../../styles/RandomizerPage.module.css";
import styles from "../../styles/stylesRandomize.module.css";


const Randomizer = () => {

    return (
        <>
            <div className={styles.classic}>
                <NavigationRandom />

                <div className={styles.welcom}>
                    <h1>Найди своего персонажа</h1>
                </div>
            </div>
        </>
    )
}


export default Randomizer