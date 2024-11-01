
"use client";

import Image from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'



export default function ImageLoader({ src, alt, style }: { src: string, alt: string, style: string }) {
    const [isLoaded, setIsLoaded] = useState(true);

    return (
        <>
            {isLoaded && <Skeleton width={500} height={500} duration={3} baseColor={"#101010"} highlightColor={"#181818"} />}
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                onLoad={() => {
                    console.log("sss");
                    setIsLoaded(false);
                }}
                className={style}
            />
        </>
    );
}

