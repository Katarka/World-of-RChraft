import React from "react";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Main/Navibar";
import Home from "./components/Main/Home";
import Randomizer from "./components/Main/Randomizer";
import About from "./components/Main/About";
import Wotlk from "./components/Wotlk/Wotlk";
import Classic from "./components/Classic/Classic";
import BurningCrusade from "./components/BC/BurningCrusade";
import Rightbar from "./components/Rightbar/Rightbar";
import styled from "styled-components";

import './styles/styles.scss';

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
