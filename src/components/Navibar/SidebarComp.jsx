import { Button, Modal, Sidebar } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarComp = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
                    fill="#5D001E"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <div
                className={`top-0 right-0 w-60 bg-zinc-800 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <h3 className="mt-20 text-2xl font-semibold text-white m-5">
                    World of RCHAR
                </h3>
                {/* <div className="flex flex-col">
                        <div className="px-4">
                            <Link to='/' className='text-gray-400 hover:text-gray-50'>Home</Link>
                        </div>
                        <div className="px-4">
                            <Link to='/randomizer' className='text-gray-400 hover:text-gray-50'>Randomizer</Link>
                        </div>
                        <div className="px-4">
                            <Link to='blog' className='text-gray-400 hover:text-gray-50'>Blog</Link>
                        </div>
                        <div className="px-4">
                            <Link to='/questions' className='text-gray-400 hover:text-gray-50'>Questions</Link>
                        </div>
                        <div className="px-4">
                            <Link to='/about' className='text-gray-400 hover:text-gray-50'>About</Link>
                        </div>
                    </div> */}
                <ul className="space-y-2">
                    <li>
                        <Link to='/'
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg 
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            {/* <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
							<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
						</svg> */}
                            <span className="ml-3 text-gray-400 hover:text-gray-50">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/randomizer'
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg 
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 text-gray-400 hover:text-gray-50">Randomizer</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog'
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg 
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 text-gray-400 hover:text-gray-50">Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/questions'
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg 
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 text-gray-400 hover:text-gray-50">Questions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg 
                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="ml-3 text-gray-400 hover:text-gray-50">About</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarComp