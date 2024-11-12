import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ theme }: { theme: string | undefined }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link href={"/"}>
      {isClient && theme != undefined && (
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
