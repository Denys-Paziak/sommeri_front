import Image from "next/image";
import { backHost } from "@/app/utils/server/server";

interface ImageServerProps {
  link: string;
  styles?: string
}

const ImageServer = ({ link, styles }: ImageServerProps) => {
  return (
    <Image
      fill
      src={backHost + link}
      alt="link"
      placeholder="blur"
      className={styles}
      blurDataURL="/images/def.jpg"
    />
  );
};

export default ImageServer;
