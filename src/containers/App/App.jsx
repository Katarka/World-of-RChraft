import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "../../components/Navibar";
import Home from "../HomePage/HomePage";
import RandomizerPage from "../RandomizerPage";
import About from "../../components/HomePage/About";
import Footer from "../../components/Footer";
import Blog from "../BlogPage";
import Wotlk from "../RandomizerPage/WotlkPage/Wotlk";
import ClassicPage from "../RandomizerPage/ClassicPage";
import BurningCrusade from "../RandomizerPage/BcPage/BurningCrusade";
import Questions from "../../components/HomePage/Questions";
import Cata from "../RandomizerPage/CataPage/Cata";
import '../../styles/styles.scss';

function App() {
    return (
        <>
            <Navibar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/randomizer" element={<RandomizerPage />} />
                <>
                    <Route path='/randomizer/classic' element={<ClassicPage />} />
                    <Route path='/randomizer/bc' element={<BurningCrusade />} />
                    <Route path='/randomizer/wotlk' element={<Wotlk />} />
                    <Route path='/randomizer/cataclysm' element={<Cata />} />
                </>
                <Route path="/questions" element={<Questions />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
