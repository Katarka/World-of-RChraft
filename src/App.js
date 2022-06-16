import React from "react";
import './App.css';
import Classic from "./components/Classic/Classic";
import Navbar from "./components/Leftbar/Leftbar";
import BurningCrusade from "./components/BC/BurningCrusade";
import {Route, Routes} from "react-router-dom";
import Wotlk from "./components/Wotlk/Wotlk";
import Rightbar from "./components/Rightbar/Rightbar";

function App(props) {
    return (
        <div className='app-wrapper'>
            <div className='container__sidebar'>
                <Navbar/>
            </div>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/classic' element={<Classic data={props.dataClassic} getRandom={props.random}/>}/>
                    <Route exact path='/bc' element={<BurningCrusade data={props.dataBc} getRandom={props.random}/>}/>
                    <Route exact path='/wotlk' element={<Wotlk data={props.dataWotlk} getRandom={props.random}/>}/>
                </Routes>
            </div>
            <div className='container__header'>
                <Rightbar/>
            </div>
        </div>
    );
}

export default App;
