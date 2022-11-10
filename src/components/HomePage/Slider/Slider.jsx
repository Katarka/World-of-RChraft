import React from "react";


const Slider = () => {
    return (
        <div className="h-screen bg-homeBg2 bg-cover">
            <div className="container mx-auto h-screen">
                <div className="flex items-center justify-center gap-12 h-screen w-[1000px] mx-auto overflow-x-auto">
                    <div className="mt-0 h-128 min-w-[100px] bg-slice1 bg-cover">
                        <div className="invisible">01</div>
                    </div>
                    <div className="mt-14 h-128 min-w-[100px] bg-slice2 bg-cover">
                        <div className="invisible">02</div>
                    </div>
                    <div className="mt-28 h-128 min-w-[100px] bg-slice3 bg-cover">
                        <div className="invisible">03</div>
                    </div>
                    <div className="mt-14 h-128 min-w-[100px] bg-slice4 bg-cover">
                        <div className="invisible">04</div>
                    </div>
                    <div className="mt-0 h-128 min-w-[100px] bg-slice5 bg-cover">
                        <div className="invisible">05</div>
                    </div>
                    <div className="mt-0 h-128 min-w-[100px] bg-slice1 bg-cover">
                        <div className="invisible">01</div>
                    </div>
                    <div className="mt-14 h-128 min-w-[100px] bg-slice2 bg-cover">
                        <div className="invisible">02</div>
                    </div>
                    <div className="mt-28 h-128 min-w-[100px] bg-slice3 bg-cover">
                        <div className="invisible">03</div>
                    </div>
                    <div className="mt-14 h-128 min-w-[100px] bg-slice4 bg-cover">
                        <div className="invisible">04</div>
                    </div>
                    <div className="mt-0 h-128 min-w-[100px] bg-slice5 bg-cover">
                        <div className="invisible">05</div>
                    </div>
                </div>
                {/*512px & 96px*/}
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