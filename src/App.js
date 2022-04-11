import React from "react";
import './App.css';
import Classic from "./components/classic/classic";

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-wrapper-content'>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
          <div className="items">item 1</div>
      </div>
        <Classic />
    </div>
  );
}

export default App;
