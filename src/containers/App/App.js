import React from "react";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "../HomePage/Navibar";
import Home from "../HomePage/Home";
import Randomizer from "../HomePage/Randomizer";
import About from "../HomePage/About";
import Wotlk from "../RandomizePage/WotlkPage/Wotlk";
import Classic from "../RandomizePage/ClassicPage/Classic";
import BurningCrusade from "../RandomizePage/BcPage/BurningCrusade";
import '../../styles/styles.scss';
import Footer from "../HomePage/Footer";
import Blog from "../HomePage/Blog";
import Questions from "../HomePage/Qustions";
import Cata from "../RandomizePage/CataPage/Cata";

function App() {
    return (
        <>
            <Navibar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/randomizer" element={<Randomizer/>}/>
                <>
                    <Route path='/randomizer/classic' element={<Classic/>}/>
                    <Route path='/randomizer/bc' element={<BurningCrusade/>}/>
                    <Route path='/randomizer/wotlk' element={<Wotlk/>}/>
                    <Route path='/randomizer/cataclysm' element={<Cata/>}/>
                 </>
                <Route path="/questions" element={<Questions/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
