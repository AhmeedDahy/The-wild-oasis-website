"use client";

import { useEffect, useState } from "react";

export function useResponsive(breakpoints) {
  const [index, setIndex] = useState(0);

  useEffect(
    function () {
      function updateIndex() {
        const width = window.innerWidth;
        const newIndex = breakpoints.findIndex((bp) => width <= bp);
        setIndex(newIndex === -1 ? breakpoints.length : newIndex);
      }
      updateIndex();
      window.addEventListener("resize", updateIndex);
      return () => window.removeEventListener("resize", updateIndex);
    },
    [breakpoints]
  );

  return index;
}
