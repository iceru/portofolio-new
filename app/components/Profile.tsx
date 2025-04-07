'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from "next/image";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import wave from "../images/wave-1.png";
import { NextPage } from 'next';

interface Props {
    isCollapsed: boolean;
    setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

const Profile: NextPage<Props> = ({ isCollapsed, setIsCollapsed }) => {
    const [offset, setOffset] = useState(0);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // set initial
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const calculateYears = () => {
        const current = new Date().getFullYear();
        const old = new Date('08 Oct 2020').getFullYear();
        return current - old;
    };

    const collapseText = offset === 0 ? 'Open Me!' : 'Go Top!';

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        setIsCollapsed(false);
    };

    return (
        <section
            className={`bg-[#00FFAB] text-gray-900 rounded-3xl p-6 flex justify-center items-center flex-col transition-all duration-500 ease-in-out
        ${isCollapsed ? 'w-[100px] pb-14' : 'lg:w-[40%]'} mr-4 min-h-[90vh] max-h-[90vh] sticky top-6 shrink-0`}
        >
            <div className={`text-center flex flex-col ${isCollapsed ? 'justify-end' : 'justify-center'} items-center h-full`}>
                <button
                    type="button"
                    onClick={isCollapsed ? handleClick : () => setIsCollapsed(true)}
                    className={`cursor-pointer text-lg font-bold mb-4 font-mono absolute top-6 ${isCollapsed ? 'left-2 w-[80px]' : 'left-6'}`}
                >
                    {isCollapsed ? collapseText : 'Collapse Me!'}
                </button>

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
            <div className="absolute w-full bottom-4 left-0">
                <Image className="w-full" src={wave} alt="" />
            </div>
        </section>
    );
};

export default Profile;
