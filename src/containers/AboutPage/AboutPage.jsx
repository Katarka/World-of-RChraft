import React from "react";
import styles from './AboutPage.module.css';


const AboutPage = () => (
    <div className={styles.blogPage}>
            <div className={styles.wrapper}>
            <h1 className={styles.BlogMainTitle}>О проекте</h1>                 
                    <div className={styles.blogItemWrapper}>
                            <div className={styles.blogItemTopRow}>
                                <h2 className={styles.blogItemTitle}></h2>
                            </div>
                            <div className={styles.blogItemText}>
                                <h3></h3>
                                <h3></h3>
                            </div>
                    </div>
            </div>
        </div>
)


export default AboutPage