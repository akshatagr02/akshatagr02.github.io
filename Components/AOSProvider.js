'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1500, // animation duration in ms
      once: false,   // whether animation should happen only once
      offset: 100,   // offset (in px) from original trigger point
      easing: 'ease-out-cubic',
    });
  }, []);

  return <>{children}</>;
}