import React from "react";
import { Carousel } from "flowbite-react";
import classic from "../../../assets/img/classic.jpg"
import bc from "../../../assets/img/bc.jpg"
import lc from "../../../assets/img/lc.jpg"


const Slider = () => {
    return (
        <div>
            <div className="h-60 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img className="w-full h-full" src={classic} alt="..." />
                    <img className="w-full h-full" src={bc} alt="..." />
                    <img className="w-full h-full" src={lc} alt="..." />
                </Carousel>
            </div>
        </div>
    )
}

export default Slider