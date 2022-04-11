import React from "react";
import './App.css';
import Classic from "./components/classic/classic";
import classimg from "../src/assets/classicimg.png"


function App() {
    return (
        <div className='app-wrapper'>
            <div className="items">
                <h2>item 1</h2>
                <h2>item 2</h2>
                <h2>item 3</h2>
                <h2>item 4</h2>
            </div>
            <div className='app-wrapper-content'>
                <Classic/>
            </div>
        </div>
    );
}

export default App;
