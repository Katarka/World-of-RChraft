import React from "react";


const Slider = () => {
    return (
        <div className="h-screen w-auto bg-homeBg2 bg-cover">
            <div className="md:container md:mx-auto">
                <div className="flex items-baseline justify-center">
                    <div className="pt-28 m-6 h-128 w-24 bg-slice1">
                        <div className="invisible">01</div>
                    </div>
                    {/*512px & 96px*/}
                    <div className="pt-14 m-6 h-128 w-24 bg-slice2">
                        <div className="invisible">02</div>
                    </div>
                    <div className="pt-0 m-6 h-128 w-24 bg-slice3">
                        <div className="invisible">03</div>
                    </div>
                    <div className="pt-14 m-6 h-128 w-24 bg-slice4">
                        <div className="invisible">04</div>
                    </div>
                    <div className="pt-28 m-6 h-128 w-24 bg-slice5">
                        <div className="invisible">05</div>
                    </div>
                </div>
                {/*<div className="pt-14 m-6 h-128 w-24 bg-slice6">.</div>*/}
                {/*<div className="pt-0 m-6 h-128 w-24 bg-slice7">.</div>*/}
                {/*<div className="pt-14 m-6 h-128 w-24 bg-slice8">.</div>*/}
                {/*<div className="pt-28 m-6 h-128 w-24 bg-slice9">.</div>*/}
                {/*<div className="pt-14 m-6 h-128 w-24 bg-slice10">.</div>*/}
            </div>
        </div>
    )
}

export default Slider