import {Timeline} from "flowbite-react";
import React from "react";
import {dataTimelinePage} from "../../../data/dataTimelinePage";

const TimelinePage = () => {
    let dataTimeline = Object.values(dataTimelinePage)
    console.log(dataTimeline)
    return (
        <div className="h-screen w-auto">
            <div className="container mx-auto h-screen">
                <div className="flex items-center gap-12 h-screen mx-auto justify-center">
                    <Timeline>
                        {dataTimeline.map(el => (
                            <Timeline.Item>
                                <Timeline.Point/>
                                <Timeline.Content>
                                    <Timeline.Time>
                                        {el[0]}
                                    </Timeline.Time>
                                    <Timeline.Title>
                                        {el[1]}
                                    </Timeline.Title>
                                    <Timeline.Body>
                                        {el[2]}
                                    </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    )
}

export default TimelinePage