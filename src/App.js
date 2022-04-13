import React from "react";
import './App.css';
import Classic from "./components/classic/classic";

function App() {
    return (
        <div className='app-wrapper'>
            <Classic/>
            <div className='app-wrapper-content'>
                <div className="items">
                    <h2>item 2</h2>
                    <h2>item 3</h2>
                    <h2>item 4</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
