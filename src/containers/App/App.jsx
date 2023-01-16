import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Navibar from "../../components/Navibar";
import HomePage from "../HomePage/HomePage";
import RandomizerPage from "../RandomizerPage";
import AboutPage from "../../containers/AboutPage";
import FooterPage from "../../components/Footer/FooterPage";
import BlogsPage from "../BlogsPage";
import QuestionsPage from "../QuestionsPage";


import styles from './App.module.css';

import SidebarComp from "../../components/Navibar/SidebarComp";
import BlogPage from "../BlogPage/BlogPage";

function App() {
    return (
        <div className={styles.wrapper}>
            {/* <Navibar /> */}
            <SidebarComp/>
            <div className={styles.contentWrapper}>
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
                    <Route path="/blog" element={<BlogsPage />} />
                    <Route path="/blog/:id" element={<BlogPage />} />
                    <Route path="/randomizer" element={
                        <RandomizerPage addon={useSelector(state => state.addonReducer.addon)} />
                    } />
                    <Route path="/questions" element={<QuestionsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
            <FooterPage />
        </div>
    )}

export default App;
