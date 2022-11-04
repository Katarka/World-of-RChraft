import React from "react";
import { Link } from "react-router-dom"
// import {THEME_DARK, THEME_LIGHT, useTheme} from "../../context/ThemeContext";

const Navibar = () => {
  return (
    <>
      <nav className="flex bg-gray-900 py-4 items-center">
        <div className="container mx-auto flex">
          <div className="text-gray-400 hover:text-gray-50 px-3">World-of-RChar</div>
          <ul className="flex">
            <li className="px-4">
              <Link to='/' className='text-gray-400 hover:text-gray-50'>Home</Link>
            </li>
            <li className="px-4">
              <Link to='/randomizer' className='text-gray-400 hover:text-gray-50'>Randomizer</Link>
            </li>
            <li className="px-4">
              <Link to='blog' className='text-gray-400 hover:text-gray-50'>Blog</Link>
            </li>
            <li className="px-4">
              <Link to='/questions' className='text-gray-400 hover:text-gray-50'>Questions</Link>
            </li>
            <li className="px-4">
              <Link to='/about' className='text-gray-400 hover:text-gray-50'>About</Link>
            </li>
          </ul>
        </div>


      </nav>
    </>
  )
}

export default Navibar