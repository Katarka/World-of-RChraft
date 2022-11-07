import { Footer } from "flowbite-react";
import React from "react";


const FooterPage = () => {
    return (
        <Footer bgDark={true}>
            <div className="w-full">
                <div className="w-full bg-zinc-800 py-6 px-4 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="One easy eye™"
                        year={2022}
                    />
                </div>
            </div>
        </Footer>
    )
}

export default FooterPage