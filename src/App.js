import React from "react";
import './App.css';
import Classic from "./components/classic/classic";
import Navbar from "./components/navbar/navbar";
import Bc from "./components/bc/bc";
import WotlkComponent from "./components/wotlk/wotlkComponent";
import {Route, Routes} from "react-router-dom";
import Wotlk from "./components/wotlk/wotlk";


function App() {
    return (
        <div className='app-wrapper'>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/classic' element={<Classic/>}/>
                    <Route path='/bc' element={<Bc/>}/>
                    <Route path='/wotlk' element={<Wotlk/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
