import React from "react";


const Slider = () => {
    return (
        <div className="h-screen w-auto bg-homeBg bg-cover">
            <div className="h-screen flex items-baseline justify-center pt-24 pb-24 bg-gradient-to-r from-blue-700">
                <div className="pt-28 m-6 h-128 w-24 bg-slice1 will-change-auto hover:will-change-scroll">.</div>
                {/*512px & 96px*/}
                <div className="pt-14 m-6 h-128 w-24 bg-slice2 ">.</div>
                <div className="pt-0 m-6 h-128 w-24 bg-slice3">.</div>
                <div className="pt-14 m-6 h-128 w-24 bg-slice4">.</div>
                <div className="pt-28 m-6 h-128 w-24 bg-slice5">.</div>
                <div className="pt-14 m-6 h-128 w-24 bg-slice6">.</div>
                <div className="pt-0 m-6 h-128 w-24 bg-slice7">.</div>
                <div className="pt-14 m-6 h-128 w-24 bg-slice8">.</div>
                <div className="pt-28 m-6 h-128 w-24 bg-slice9">.</div>
                <div className="pt-14 m-6 h-128 w-24 bg-slice10">.</div>
            </div>
        </div>
    )
}

export default Slider