import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className='p-5 bg-stone-800 text-white text-sm'>
            <div className="flex justify-between items-center">
                <div className="flex">
                    <div className="w-8 h-8 bg-white p-1 rounded-full">
                        <Image
                            src="/favicon.ico"
                            alt="favicon"
                            className="dark:invert"
                            width={70}
                            height={24}
                            priority
                        />                      </div>
                </div>
                <div className="flex space-x-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="">Contact</Link>
                </div>
            </div>
        </header>
    )
}