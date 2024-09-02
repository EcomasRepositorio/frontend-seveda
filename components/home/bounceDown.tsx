import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const isBrowser = () => typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser()) return;
        setIsVisible(true);

        const handleScroll = () => {
            if (window.scrollY < 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`animate-bounce fixed bottom-0 left-1/2 right-0 text-primaryblue rounded-full pb-4 z-50 items-center transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <IoIosArrowDown className="h-10 w-10" />
        </div>
    );
}

export default ScrollToTopButton;
