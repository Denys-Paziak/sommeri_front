import Image from "next/image";
import { backHost } from "@/app/utils/server/server";

interface ImageServerProps {
  width: number,
  height: number,
  link: string;
  styles?: string
}

const ImageServer = ({ width, height, link, styles }: ImageServerProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={backHost + link}
      alt="link"
      placeholder="blur"
      className={styles}
      blurDataURL="/images/def.jpg"
    />
  );
};

export default ImageServer;
