import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 flex items-center justify-between max-w-7xl mx-auto py-4">
      <div className="bg-clip-text from-[#1649FF] to-[#0D2C99] text-transparent bg-gradient-to-r md:text-3xl lg:text-lg text-xs flex gap-5 items-center">
        <Link href={"/"} className="flex gap-2 items-center">
          <Image
            src="/images/48.jpg"
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
          <span>Inovact Private Limited</span>
        </Link>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div className="hidden md:block">
          <Link href={"/about"} target="_blank">
            About Us
          </Link>
        </div>
        <div className="ml-0 md:ml-16">
          <Link
            href="https://play.google.com/store/apps/details?id=in.pranaydas.inovact"
            target="_blank"
          >
            <Image
              src="/images/1.png"
              width={120}
              height={120}
              alt=""
              className="w-auto h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
