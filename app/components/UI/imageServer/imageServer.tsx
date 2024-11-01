import Image from "next/image";
import { backHost } from "@/app/utils/server/server";

const ImageServer = ({ link, width, height }: { link: string, width: number, height: number }) => {

  return (
    <>
      <Image
        fetchPriority="high"
        src={backHost + link}
        width={width}
        height={height}
        alt={"link"}
      />
    </>
  );
};

export default ImageServer;
