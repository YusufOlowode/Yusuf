"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            offset: 120,
            delay: 0,
            once: true,
            easing: 'ease-out',
        });
    }, []);

    return null;
};

export default AOSInit;
