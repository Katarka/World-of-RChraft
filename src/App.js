import React from "react";
import './App.css';
import Classic from "./components/Classic/Classic";
import Navbar from "./components/Leftbar/Leftbar";
import BurningCrusade from "./components/BC/BurningCrusade";
import {Route, Routes} from "react-router-dom";
import Wotlk from "./components/Wotlk/Wotlk";
import Rightbar from "./components/Rightbar/Rightbar";
import {setNewRandomWotlk} from "./data/dataWotlk";
import {setNewRandomBC} from "./data/dataBc";

function App() {
    return (
        <div className='app-wrapper'>
            <div className='container__sidebar'>
                <Navbar/>
            </div>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/classic' element={<Classic setNewRandom={setNewRandomWotlk}/>}/>
                    <Route exact path='/bc' element={<BurningCrusade setNewRandom={setNewRandomBC}/>}/>
                    <Route exact path='/wotlk' element={<Wotlk setNewRandom={setNewRandomWotlk}/>}/>
                </Routes>
            </div>
            <div className='container__header'>
                <Rightbar/>
            </div>
        </div>
    );
}

export default App;
