import React from 'react'

function Navigation() {
    return (
        <nav className='flex items-center justify-center text-white mb-6'>
            <ul className='flex items-center lg:text-lg tracking-wide font-mono gap-10'>
                <li className='' >
                    <a href="#">
                        Home
                    </a>
                </li>
                <li className=''>
                    <a href="#">
                        Professional Works
                    </a>
                </li>
                <li className=''>
                    <a href="#">
                        Projects
                    </a>
                </li>
            </ul >
            {/* <div className='shrink-0 font-mono'>
                <a href="" className='bg-teal-400 text-slate-900 font-bold text-xl px-4 py-2 rounded-full'>Hire Me</a>
            </div> */}
        </nav >
    )
}

export default Navigation