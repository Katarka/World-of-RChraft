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
import Rightbar from "../RandomizePage/Rightbar/Rightbar";
import styled from "styled-components";

import '../../styles/styles.scss';

function App({WorContext}) {
    return (
        <>
            <Navibar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/randomizer" element={<Randomizer WorContext={WorContext}/>}/>
                <>
                    <Route path='/randomizer/classic' element={<Classic WorContext={WorContext}/>}/>
                    <Route path='/randomizer/bc' element={<BurningCrusade WorContext={WorContext}/>}/>
                    <Route path='/randomizer/wotlk' element={<Wotlk WorContext={WorContext}/>}/>
                </>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
