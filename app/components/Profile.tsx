'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

function Profile() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsCollapsed(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const calculateYears = () => {
        const current = new Date().getFullYear();
        const old = new Date('08 Oct 2020').getFullYear();
        return current - old;
    };

    return (
        <section
            className={`bg-[#00FFAB] text-gray-900 rounded-3xl p-6 flex justify-center items-center flex-col transition-all duration-500 ease-in-out
                ${isCollapsed ? 'w-[100px]' : 'lg:w-[40%]'} mr-4 min-h-[90vh] max-h-[90vh] sticky top-6 shrink-0`}
        >
            <div className={`text-center flex flex-col ${isCollapsed ? 'justify-between' : 'justify-center'} items-center h-full`}>
                {isCollapsed && (
                    <button type='button' onClick={() => { window.scrollTo({ top: 0, left: 0 }) }}
                        className="cursor-pointer text-lg font-bold mb-4 font-mono ">
                        Go <br />
                        Top
                    </button>
                )}

                {/* Only show below if not collapsed */}
                {!isCollapsed && (
                    <>
                        <h2 className="text-3xl mb-4">
                            Hello, My Name is <span className="font-mono font-bold">Hafiz!</span>
                        </h2>
                        <p className="mb-4">
                            I’m a Passionate Full-Stack Developer with <span className="font-mono font-bold">{calculateYears()} years</span> of experience with building all aspects of user interface and user experience. Specialize in <span className="font-mono font-bold">HTML, CSS, React.js, Vue.js, Express.Js, Laravel and Wordpress</span> to build various types of websites.
                        </p>
                    </>
                )}

                {/* Socials always visible */}
                <div className={`flex justify-center items-center mt-4 transition-all duration-500 ease-in-out ${isCollapsed ? 'flex-col space-y-4' : 'flex-row space-x-4'}`}>
                    <a href="https://github.com/iceru" target="_blank" className="hover:opacity-80 transition">
                        <Image width={24} src={github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/hafizeto/" target="_blank" className="hover:opacity-80 transition">
                        <Image width={24} src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/Hafizeto" target="_blank" className="hover:opacity-80 transition">
                        <Image width={24} src={twitter} alt="Twitter" />
                    </a>
                </div>

            </div>
        </section >
    );
}

export default Profile;
