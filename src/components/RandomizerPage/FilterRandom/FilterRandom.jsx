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
                                <form className="flex flex-col shadow-md rounded px-8 pt-6 pb-8 w-full">
                                    <button className="text-white bg-blue-500 active:bg-blue-700 hover:animate-spin font-bold uppercase text-sm px-6 py-3
                                    rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">1
                                    </button>
                                    <button className="text-white bg-red-500 active:bg-red-700 hover:animate-spin font-bold uppercase text-sm px-6 py-3
                                    rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">1
                                    </button>
                                    <button className="text-white bg-green-500 active:bg-green-700 hover:animate-spin font-bold uppercase text-sm px-6 py-3
                                    rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">1
                                    </button>
                                    <button className="text-white bg-green-500 active:bg-green-700 hover:animate-spin font-bold uppercase text-sm px-6 py-3
                                    rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">1
                                    </button>
                                    <button className="text-white bg-green-500 active:bg-green-700 hover:animate-spin font-bold uppercase text-sm px-6 py-3
                                    rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">1
                                    </button>
                                </form>
                            </div>
                            <div
                                className="flex items-center justify-end m-5 border-t border-solid border-blueGray-200 rounded-b">
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