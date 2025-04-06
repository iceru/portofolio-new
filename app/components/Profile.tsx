import React from 'react'
import Image from "next/image";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

function Profile() {
    const calculateYears = () => {
        const current = new Date().getFullYear();
        const old = new Date('08 Oct 2020').getFullYear();
        return current - old;
    }
    return (
        <section className="bg-[#00FFAB] text-gray-900 rounded-3xl p-6 flex justify-center items-center flex-col lg:w-[40%] mr-4 min-h-[90vh]">
            <div className="text-center">
                <h1 className="text-3xl mb-4">
                    Hello, My Name is <span className="font-mono font-bold">Hafiz!</span>
                </h1>
                <p className="mb-4">
                    I’m a Passionate Front-End Web Developer with <span className="font-mono font-bold">{calculateYears()} years</span> of experience with building all aspects of user interface and user experience. Specialize in <span className="font-mono font-bold">HTML, CSS, React.js, Vue.js, Express.Js, Laravel and Wordpress</span> to build various types of websites.
                </p>
                <div className="flex justify-center items-center">
                    <a href="https://github.com/iceru" target="_blank" className="block mr-4 hover:opacity-80 transition">
                        <Image width={24} src={github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/hafizeto/" target="_blank" className="block mr-4 hover:opacity-80 transition">
                        <Image width={24} src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/Hafizeto" target="_blank" className="block mr-4 hover:opacity-80 transition">
                        <Image width={24} src={twitter} alt="twitter" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Profile