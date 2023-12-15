import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Learn Nextjs Misc',
    description: 'nelson learning nextjs',
}

export default function EnvPage() {
    const env = process.env;
    const user = env.DB_USER;
    const password = env.DB_PASSWORD;
    return (
        <>
            <div className="flex flex-col space-y-8 p-8 items-start w-full">
                <div className="text-xs">
                    app/env/page.tsx
                </div>
                <div>
                    <div className="text-sm underline">
                        .envs
                    </div>
                    <div className="text-sm flex space-x-3">
                        <div className="font-semibold">user: </div>
                        <div className="">{user}</div>
                    </div>
                    <div className="text-sm flex space-x-3">
                        <div className="font-semibold">password</div>
                        <div className="">{password}</div>
                    </div>
                </div>
            </div>
        </>
    )
}