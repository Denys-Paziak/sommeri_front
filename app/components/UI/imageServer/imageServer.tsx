import Image from "next/image";
import { backHost } from "@/app/utils/server/server";

interface ImageServerProps {
  link: string;
  width: number;
  height: number;
}

const ImageServer = ({ link, width, height }: ImageServerProps) => {

  return (
    <Image
      src={backHost + link}
      alt="link"
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="/images/def.jpg"
    />
  );
};

export default ImageServer;
