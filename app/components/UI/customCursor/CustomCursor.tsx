"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
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
