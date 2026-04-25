'use client';

import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientLayout = ({ children }) => {
    useEffect(() => {
        // Dynamically import AOS and its CSS to prevent auto-initialization before React hydration
        import('aos').then((AOS) => {
            import('aos/dist/aos.css').then(() => {
                AOS.default.init({
                    once: false,
                    mirror: true,
                    duration: 800,
                    easing: 'ease-in-out',
                    offset: 50,
                });
            });
        });
    }, []);

    return (
        <>
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
        </>
    )
}

export default ClientLayout