import Image from "next/image";

const ImageServer = ({link}: {link: string}) => {

  return (
    <Image src={"http://localhost:1337" + link} width={2000} height={2000} alt={"link"}/>
  );
};

export default ImageServer;
