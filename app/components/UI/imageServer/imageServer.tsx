"use client";

import Image from "next/image";
import { backHost } from "@/app/utils/server/server";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ImageServer = ({ link, width, height }: { link: string, width: number, height: number }) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Skeleton />}
      <Image
        fetchPriority="high"
        src={backHost + link}
        width={width}
        height={height}
        alt={"link"}
        onLoadingComplete={() => { setLoading(false) }}
      />
    </>
  );
};

export default ImageServer;
