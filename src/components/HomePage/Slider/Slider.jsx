import React from "react";
import SliderCard from "../SliderCard/SliderCard";


const Slider = () => {
    return (
        <div className="h-screen bg-homeBg2 bg-cover">
            <div className="container mx-auto h-screen">
                <div className="snap-x flex items-center gap-12 h-screen w-1/2 mx-auto overflow-x-auto">
                    <SliderCard stylesSlider="mt-0 bg-slice1"/>
                    <SliderCard stylesSlider="mt-14 bg-slice2"/>
                    <SliderCard stylesSlider="snap-center mt-28 bg-slice3"/>
                    <SliderCard stylesSlider="mt-14 bg-slice4"/>
                    <SliderCard stylesSlider="mt-0 bg-slice5"/>
                    <SliderCard stylesSlider="mt-0 bg-slice6"/>
                    <SliderCard stylesSlider="mt-14 bg-slice7"/>
                    <SliderCard stylesSlider="snap-center mt-28 bg-slice8"/>
                    <SliderCard stylesSlider="mt-14 bg-slice9"/>
                    <SliderCard stylesSlider="mt-0 bg-slice10"/>
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