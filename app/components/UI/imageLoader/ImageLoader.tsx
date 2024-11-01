"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function ImageLoader({ src, alt, style }: { src: string, alt: string, style: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
    }, [src]);

    return (
        <>
            {!isLoaded && <Skeleton width={500} height={500} duration={3} baseColor={"#101010"} highlightColor={"#181818"} />}

        </>
    );
}
