import '../css/stickyscrollerStyle.css';
import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const StickyScroller = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
             window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <ScrollLink to="top" smooth={true} duration={500}>
            <div className={`sticky ${isVisible ? 'visible' : ''}`}>
             <i class="fa-solid fa-chevron-up flecha"></i>
            </div>
        </ScrollLink>
    
    
  )};
  
  export default StickyScroller;