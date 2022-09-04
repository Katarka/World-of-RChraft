import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "../../components/Navibar";
import Home from "../HomePage/HomePage";
import RandomizerPage from "../RandomizerPage";
import About from "../../components/HomePage/About";
import Footer from "../../components/Footer";
import BlogPage from "../BlogPage";

import Questions from "../../components/HomePage/Questions";


function App() {
    return (
        <>
            <Navibar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/randomizer" element={
                    <RandomizerPage addon={useSelector(state => state.addonReducer.addon)}/>
                } />
                <Route path="/questions" element={<Questions />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
