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

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
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
        <section onClick={isCollapsed ? handleClick : () => null}
            className={`bg-[#00FFAB] text-gray-900 rounded-3xl p-6 flex justify-center items-center flex-col transition-all duration-500 ease-in-out
        ${isCollapsed ? 'w-full lg:h-full h-[80px] lg:w-[100px] lg:pb-14 cursor-pointer' : 'w-full lg:w-[40%] min-h-[80vh]'} mr-4 lg:min-h-[90vh] mb-6 lg:mb-0 max-h-[90vh] lg:sticky relative lg:top-6 shrink-0`}
        >
            <div className={`text-center flex flex-col ${isCollapsed ? 'justify-end' : 'justify-center'} items-center h-full`}>
                <button
                    type="button"
                    onClick={isCollapsed ? handleClick : () => setIsCollapsed(true)}
                    className={`hidden lg:block cursor-pointer text-lg font-bold mb-4 font-mono absolute top-6 ${isCollapsed ? 'left-2.5 w-[80px]' : 'left-6'}`}
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

                <div className={`flex justify-center items-center transition-all duration-500 ease-in-out ${isCollapsed ? 'lg:flex-col lg:space-y-4 lg:space-x-0 space-x-4' : 'flex-row space-x-4'}`}>
                    <a href="https://github.com/iceru" target="_blank" className="hover:opacity-80 transition" onClick={(e) => e.stopPropagation()}>
                        <Image width={24} src={github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/hafizeto/" target="_blank" className="hover:opacity-80 transition" onClick={(e) => e.stopPropagation()}>
                        <Image width={24} src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://x.com/Hafizeto" target="_blank" className="hover:opacity-80 transition" onClick={(e) => e.stopPropagation()}>
                        <Image width={24} src={twitter} alt="Twitter" />
                    </a>
                </div>

                {/* <div className="absolute bottom-10">
                    <a href="#projects">
                        <span className='mb-0 font-bold block'>My Projects</span>
                        <span className="material-symbols-outlined">
                            arrow_downward_alt
                        </span>
                    </a>
                </div> */}
            </div>
            <div className="absolute w-full bottom-4 left-0">
                <Image className="w-full" src={wave} alt="" />
            </div>
        </section>
    );
};

export default Profile;
