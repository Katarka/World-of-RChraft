import React from "react";
import SliderCard from "../SliderCard/SliderCard";
import kadgar from './../../../assets/kadgar.png'


const Slider = () => {
    return (
        <div className="h-screen bg-gradient-to-b from-cyan-500 to-cyan-200 bg-cover">
            <div className="container mx-auto h-36 flex flex-col items-center justify-center">
                <span className="text-5xl font-sans font-bold">World of RChar</span>
                <div className="text-sm font-thin">by One easy eye™</div>
            </div>
            <div className="container mx-auto h-screen">
                <div className="snap-x flex items-center gap-12 w-1/2 mx-auto overflow-x-auto ">
                    <SliderCard stylesSlider="mt-0 bg-slice1 hover:bg-BgGif hover:bg-center"/>
                    <SliderCard stylesSlider="mt-14 bg-slice2 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="snap-center mt-28 bg-slice3 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="mt-14 bg-slice4 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="mt-0 bg-slice5 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="mt-0 bg-slice6 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="mt-14 bg-slice7 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="snap-center mt-28 bg-slice8 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="mt-14 bg-slice9 hover:bg-BgGif hover:bg-contain"/>
                    <SliderCard stylesSlider="mt-0 bg-slice10 hover:bg-BgGif hover:bg-contain"/>
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