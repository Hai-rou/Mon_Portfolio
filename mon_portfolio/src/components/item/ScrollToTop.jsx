import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import '../../SASS/item/scrolltotop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Afficher le bouton quand on descend de 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="scroll-to-top-btn"
                    aria-label="Remonter en haut de la page"
                >
                    <Icon icon="mdi:chevron-up" width="24" height="24" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;