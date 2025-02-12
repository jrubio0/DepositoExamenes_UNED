import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Esto asegura que el scroll se mueva al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location]); // Se ejecuta cada vez que la ubicación cambia

  return null;
};

export default ScrollToTop;
