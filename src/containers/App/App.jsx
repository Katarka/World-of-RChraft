import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Navibar from "../../components/Navibar";
import HomePage from "../HomePage/HomePage";
import RandomizerPage from "../RandomizerPage";
import AboutPage from "../../containers/AboutPage";
import Footer from "../../components/Footer";
import BlogPage from "../BlogPage";
import QuestionsPage from "../QuestionsPage";

import styles from './App.module.css';


function App() {
    return (
        <div className={styles.wrapper}>
            <Navibar />
            <div className={styles.contentWrapper}>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/randomizer" element={
                        <RandomizerPage addon={useSelector(state => state.addonReducer.addon)} />
                    } />
                    <Route path="/questions" element={<QuestionsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}

export default App;
