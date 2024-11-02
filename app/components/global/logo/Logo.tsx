import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        fetchPriority="high"
        width={300}
        height={100}
        priority={true}
        src="../../images/logo.svg"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
