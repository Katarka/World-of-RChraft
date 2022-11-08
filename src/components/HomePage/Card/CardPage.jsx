import React from "react";
import { Button, Card } from "flowbite-react";
import classic from "../../../assets/img/classic.jpg"
import bc from "../../../assets/img/bc.jpg"
import lc from "../../../assets/img/lc.jpg"

const CardPage = () => {
    return (
        <div className="h-screen w-auto">
            <div className="flex flex-nowrap justify-center pt-60">
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
    )
}

export default CardPage