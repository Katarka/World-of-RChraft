import React from "react";
import './App.css';
import Classic from "./components/classic/classic";
import Navbar from "./components/navbar/navbar";
import Bc from "./components/bc/bc";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className='app-wrapper'>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/classic' element={<Classic/>}/>
                    <Route path='/bc' element={<Bc/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
