import React from 'react';
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
    return (
            <AnimatedCursor
                color={"255, 255, 255"}
                outerSize={50}
                innerSize={8}
                innerStyle={{
                    backgroundColor: "rgb(255, 255, 255)",
                    mixBlendMode: "difference"
                }}
                outerScale={2}
                outerAlpha={1}
                outerStyle={{
                    mixBlendMode: "difference",
                }}
            />
    );
}

export default CustomCursor;