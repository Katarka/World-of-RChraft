import { Button, Timeline } from "flowbite-react";
import React from "react";

const TimelinePage = () => {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time>
                        Ноябрь 2004
                    </Timeline.Time>
                    <Timeline.Title>
                        World of Warcraft
                    </Timeline.Title>
                    <Timeline.Body>
                        World of Warcraft — массовая многопользовательская ролевая онлайн-игра, разработанная и издаваемая компанией Blizzard Entertainment.
                        Действие World of Warcraft происходит в фэнтезийной вселенной Warcraft.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
}

export default TimelinePage