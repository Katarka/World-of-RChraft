import React from "react";
import CardPage from "../../components/HomePage/Card/CardPage";
import Slider from "../../components/HomePage/Slider/Slider";
import TimelinePage from "../../components/HomePage/Timeine/TimelinePage";

const Home = () => (
    <div className="p-5">
        <Slider/>
        <CardPage/>
        <TimelinePage/>
    </div>
)

export default Home