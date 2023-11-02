"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "@/context/activeSection";

export const useSectionInView = (section: string) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, section, timeOfLastClick]);

  return { ref };
};

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null);

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { ref };
};
