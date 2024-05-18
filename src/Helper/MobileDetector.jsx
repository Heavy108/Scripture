'use client'
import { useEffect } from 'react';

const MobileDetector = () => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Redirect or display a message
      window.location.href = '/not-supported';
    }
  }, []);

  return null;
};

export default MobileDetector;