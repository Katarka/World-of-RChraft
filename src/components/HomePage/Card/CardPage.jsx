import React from "react";
import { Button, Card } from "flowbite-react";
import classic from "../../../assets/img/classic.jpg"
import bc from "../../../assets/img/bc.jpg"
import lc from "../../../assets/img/lc.jpg"

const CardPage = () => {
    return (
        <div className="h-screen w-auto bg-gradient-to-b from-cyan-200 via-purple-50 to-rose-300">
            <div className="container mx-auto h-screen">
            <div className="flex items-center gap-12 h-screen mx-auto justify-center">
                <div className="max-w-sm p-10">
                    <Card imgSrc={classic}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            World of Warcraft Classic
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            World of Warcraft Classic
                        </p>
                        <div>
                            <Button>Читать</Button>
                        </div>
                    </Card>
                    </div>

                    <div className="max-w-sm p-10">
                    <Card imgSrc={classic}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            World of Warcraft Classic
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            World of Warcraft Classic
                        </p>
                        <div>
                            <Button>Читать</Button>
                        </div>
                    </Card>
                    </div>

                    <div className="max-w-sm p-10">
                    <Card imgSrc={classic}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            World of Warcraft Classic
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            World of Warcraft Classic
                        </p>
                        <div>
                            <Button>Читать</Button>
                        </div>
                    </Card>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardPage