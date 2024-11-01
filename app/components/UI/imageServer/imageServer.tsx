"use client";

import Image from "next/image";
import { backHost } from "@/app/utils/server/server";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ImageServer = ({ link }: { link: string }) => {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading && <Skeleton width={"100%"} height={"100%"} />}
      <Image
        fetchPriority="high"
        src={backHost + link}
        width={2000}
        height={2000}
        alt={"link"}
        onLoadingComplete={() => { setLoading(false) }}
      />
    </div>
  );
};

export default ImageServer;
