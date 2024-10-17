import Image from "next/image";
import { backHost } from "@/app/utils/server/server";

const ImageServer = ({ link }: { link: string }) => {
  return (
    <Image src={backHost + link} width={2000} height={2000} alt={"link"} />
  );
};

export default ImageServer;
