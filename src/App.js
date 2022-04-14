import React from "react";
import './App.css';
import Classic from "./components/classic/classic";
import Navbar from "./components/navbar/navbar";
import {Route} from "react-router-dom";
import classic from "./components/classic/classic";

function App() {
    return (
        <div className='app-wrapper'>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Classic/>
            </div>
        </div>
    );
}

export default App;
