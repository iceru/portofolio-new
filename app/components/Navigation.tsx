import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <nav className='flex items-center justify-center text-white mb-6'>
            <ul className='flex items-center lg:text-lg tracking-wide font-mono gap-10'>
                <li className='transition hover:opacity-90' >
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className='transition hover:opacity-90'>
                    <Link href="/works">
                        Professional Works
                    </Link>
                </li>
                <li className='transition hover:opacity-90'>
                    <Link href="/projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation