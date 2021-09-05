import React from "react";
import './App.css';
import classic from "./components/classic/classic"

function App() {
  return (
    <div className='app-wrapper'>
        <classic/>
      <div className='app-wrapper-content'>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
      </div>
    </div>
  );
}

export default App;
