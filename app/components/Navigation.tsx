"use client"

import Link from 'next/link'
import React, { useState } from 'react'

function Navigation() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className='flex items-center justify-between text-white mb-3 lg:mb-6 container mx-auto'>
                <div className='lg:hidden block'>
                    <button type='button' className='text-white' onClick={() => { setOpen(!open) }}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </div>
                <Link href='/' className='font-mono font-bold'>
                    Muhamad Hafiz
                </Link>
                <ul className='hidden lg:flex items-center lg:text-lg tracking-wide font-mono gap-10'>
                    <li className='transition hover:opacity-90' >
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    {/* <li className='transition hover:opacity-90'>
                        <Link href="/works">
                            Professional Works
                        </Link>
                    </li> */}
                    <li className='transition hover:opacity-90'>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                </ul>
                <a href='mailto:m.hafiz1825@gmail.com' target='_blank' className='hidden lg:flex items-center font-bold font-mono bg-white text-neutral-800 rounded-xl px-4 py-1.5'>
                    <p>
                        Contact Me
                    </p>
                    <span className="material-symbols-outlined ml-2">
                        open_in_new
                    </span>
                </a>
            </nav>
            <section className={`bg-neutral-700 text-white w-[90vw] transition duration-500 ${!open ? '-translate-x-full' : ''} h-screen left-0 top-0 fixed flex flex-col justify-between z-50 p-8 font-mono`}>
                <button type='button' onClick={() => { setOpen(!open) }} className="flex justify-end text-xl items-center">
                    <span className="material-symbols-outlined mr-1">
                        close
                    </span>
                    <p>Close</p>
                </button>
                <ul>
                    <li className='transition hover:opacity-90 text-3xl mb-14' >
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className='transition hover:opacity-90 text-3xl mb-14'>
                        <Link href="/works">
                            Professional <br /> Works
                        </Link>
                    </li>
                    <li className='transition hover:opacity-90 text-3xl mb-14'>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                </ul>

                <div>
                    <a href='mailto:m.hafiz1825@gmail.com' target='_blank'
                        className='flex font-bold font-mono bg-white text-neutral-800 rounded-xl px-4 py-2 items-center text-xl'>
                        Contact Me
                        <span className="material-symbols-outlined ml-2">
                            open_in_new
                        </span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Navigation