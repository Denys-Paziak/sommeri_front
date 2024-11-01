"use client";

import Image from "next/image";
import { backHost } from "@/app/utils/server/server";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ImageServer = ({ link }: { link: string }) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Skeleton />}
      <Image
        fetchPriority="high"
        src={backHost + link}
        width={2000}
        height={2000}
        alt={"link"}
        onLoadingComplete={() => { setLoading(false) }}
      />
    </>
  );
};

export default ImageServer;
