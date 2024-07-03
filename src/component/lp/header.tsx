import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@component/molecule/navigation";

const Header = () => {
  return (
    <header className="flex py-6 justify-between container absolute top-0 right-0 left-0 z-10">
      <Link href="/">
        <Image src="/LP/logo.png" alt="logo" width={156} height={65} />
      </Link>
      <div className="flex items-center">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
