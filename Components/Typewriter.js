"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typewriter({ strings }) {
  // Reference to store the DOM element
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 30,
      backSpeed: 25,
      loop: true,
      cursorChar: "|",
    });

    // Clean up to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span ref={el} />;
}