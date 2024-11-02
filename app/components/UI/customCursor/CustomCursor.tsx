"use client";

import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.cursor = isMobile ? "auto" : "none";
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <AnimatedCursor
      color={"255, 255, 255"}
      outerSize={30}
      innerSize={8}
      innerStyle={{
        backgroundColor: "rgb(255, 255, 255)",
        mixBlendMode: "difference",
        zIndex: "9",
      }}
      outerScale={1.5}
      outerAlpha={1}
      outerStyle={{
        mixBlendMode: "difference",
      }}
    />
  );
}

export default CustomCursor;
