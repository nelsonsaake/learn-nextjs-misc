import Footer from '@/components/footer';
import React from 'react';

export default function NoLayoutPage() {
    return (
        <div className="flex space-y-8 p-8">
            <div className="text-xs">
                app/nolayout/page.tsx
            </div>
            <div className="text-sm min-h-[50vw]">
                No Layout
            </div>
        </div>
    )
}

// I am using AppRouter
// this doesn't work with AppRouter
NoLayoutPage.getLayout = function PageLoayout(page: any) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
