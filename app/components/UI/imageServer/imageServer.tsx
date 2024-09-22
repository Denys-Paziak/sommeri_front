import Image from "next/image";

const ImageServer = ({link}: {link: string}) => {

  return (
    <Image src={"http://localhost:1337" + link} width={200} height={200} alt={"link"}/>
  );
};

export default ImageServer;
