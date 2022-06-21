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
                    <Route exact path='/classic' element={<Classic WorContext={props.WorContext}/>}/>
                    <Route exact path='/bc' element={<BurningCrusade WorContext={props.WorContext}/>}/>
                    <Route exact path='/wotlk' element={<Wotlk WorContext={props.WorContext}/>}/>
                </Routes>
            </div>
            <div className='container__header'>
                <Rightbar WorContext={props.WorContext}/>
            </div>
        </div>
    );
}

export default App;
