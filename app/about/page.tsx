import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Learn Nextjs Misc',
    description: 'nelson learning nextjs',
}

export default function AboutPage() {
    return (
        <>
            <div className="flex space-y-8 p-8 items-start w-full">
                <div className="text-xs">
                    app/about/page.tsx
                </div>
                <div className="text-sm">
                    About
                </div>
            </div>
        </>
    )
}