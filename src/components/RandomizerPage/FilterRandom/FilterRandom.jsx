import React, {useState} from "react";

const FilterRandom = () => {
    const [showModal, setShowModal] = useState(false)
    debugger
    return (
        <div className="flex justify-center m-5">
            <button className="text-white bg-green-500 active:bg-green-700 hover:animate-spin font-bold uppercase text-sm px-6 py-3
            rounded shadow hover:shadow-lg outline-none focus:outline-none" onClick={() => setShowModal(true)}>
                Filter
            </button>
            {showModal ? (
                <div
                    className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div
                            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300">
                                <h3 className="text-3xl font=semibold">SET FILTER</h3>
                                <button
                                    className="bg-transparent border-0 text-black float-right"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span
                                        className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">x</span>
                                </button>
                            </div>
                            <div className="flex">
                                <form className="flex flex-col m-2 w-full">
                                    <label className="text-sm font-medium text-gray-900 dark:text-white">Select faction</label>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Faction</option>
                                        <option value="All">All</option>
                                        <option value="Alliance">Alliance</option>
                                        <option value="Horde">Horde</option>
                                    </select>
                                    <label className="text-sm font-medium text-gray-900 dark:text-white">Select race</label>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Race</option>
                                        <option value="All">All</option>
                                        <option value="Alliance">Alliance</option>
                                        <option value="Horde">Horde</option>
                                    </select>
                                </form>
                            </div>
                            <div
                                className="flex items-center justify-end p-5 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 bg-purple-800 active:bg-purple-900 font-bold uppercase text-sm px-6 py-3
                                    rounded shadow hover:shadow-lg outline-none focus:outline-none mr-5"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="text-white bg-purple-800 active:bg-purple-900 font-bold uppercase text-sm px-6 py-3
                                    rounded shadow hover:shadow-lg outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default FilterRandom