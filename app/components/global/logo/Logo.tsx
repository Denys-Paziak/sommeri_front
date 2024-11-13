import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ theme }: { theme: string | undefined }) => {

  if (!theme) {
    return
  }

  return (
    <Link href={"/"}>
      {theme != undefined && (
        <Image
          width={300}
          height={100}
          src={`/images/${theme}_logo.svg`}
          alt="logo"
        />
      )}
    </Link>
  );
};

export default Logo;
