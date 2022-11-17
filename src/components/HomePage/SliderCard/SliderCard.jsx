import React from 'react';
import cn from 'classnames'

const SliderCard = ({stylesSlider}) => {
    return (
            <div className={cn(stylesSlider, "h-128 min-w-[100px] bg-cover rounded-lg hover:shadow-3xl hover:shadow-red-900 transition-shadow duration-300 ease-in-out")}>
                <div className="invisible">01</div>
            </div>
            )
}


export default SliderCard