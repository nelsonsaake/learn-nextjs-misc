import React from 'react';
import Footer from '@/components/footer';

export default function NoLayoutLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}