'use client';

import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const ClientLayout = ({ children }) => {
    return (
        <>
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
        </>
    )
}

export default ClientLayout