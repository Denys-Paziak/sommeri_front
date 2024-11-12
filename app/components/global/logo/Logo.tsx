import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ theme }: { theme: string | undefined }) => {

  if (!theme) {
    return <Link href={"/"}><Image
      width={300}
      height={100}
      src={`/images/light_logo.svg`}
      alt="logo"
    /></Link >;
  }


  return (
    <Link href={"/"}>
      <Image
        width={300}
        height={100}
        src={`/images/${theme}_logo.svg`}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
