import React from "react";
import './App.css';
import Classic from "./components/classic/Classic";
import Navbar from "./components/navbar/Navbar";
import BurningCrusade from "./components/bc/BurningCrusade";
import {Route, Routes} from "react-router-dom";
import Wotlk from "./components/wotlk/Wotlk";
import Header from "./components/Header/Header";


function App() {
    return (
        <div className='app-wrapper'>
            {/*<Header/>*/}
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/classic' element={<Classic/>}/>
                    <Route path='/bc' element={<BurningCrusade/>}/>
                    <Route path='/wotlk' element={<Wotlk/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
