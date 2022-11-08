import React from "react";
import classic from "../../../assets/img/classic.jpg"
import bc from "../../../assets/img/bc.jpg"
import lc from "../../../assets/img/lc.jpg"


const Slider = () => {
    return (
        <div className="h-screen w-auto bg-blue-800">
            <div class="flex items-baseline justify-center pt-24">
                <div class="pt-28 m-6 h-[530px] w-24 bg-gray-900">01</div>
                <div class="pt-14 m-6 h-[530px] w-24 bg-gray-900">02</div>
                <div class="pt-0 m-6 h-[530px] w-24 bg-gray-900">03</div>
                <div class="pt-14 m-6 h-[530px] w-24 bg-gray-900">02</div>
                <div class="pt-28 m-6 h-[530px] w-24 bg-gray-900">01</div>
                <div class="pt-14 m-6 h-[530px] w-24 bg-gray-900">02</div>
                <div class="pt-0 m-6 h-[530px] w-24 bg-gray-900">03</div>
                <div class="pt-14 m-6 h-[530px] w-24 bg-gray-900">02</div>
                <div class="pt-28 m-6 h-[530px] w-24 bg-gray-900">01</div>
                <div class="pt-14 m-6 h-[530px] w-24 bg-gray-900">02</div>
            </div>
        </div>
    )
}

export default Slider