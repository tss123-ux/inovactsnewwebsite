import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:px-3 px-4  flex items-center justify-between max-w-7xl mx-auto">
      <div className="bg-clip-text from-[#1649FF] to-[#0D2C99] text-transparent bg-gradient-to-r md:text-3xl lg:text-lg text-xs py-2 flex gap-5 items-center">
        <Image
          src="/images/48.jpg"
          alt=""
          width={100}
          height={100}
          className="lg:w-[70px] lg:h-[70px] rounded-full  w-[50px] h-[50px] "
        />
        Inovact Social
      </div>
      <div className=" flex flex-row gap-5 items-center">
        {" "}
        <div className="">
          <Link
            href="https://play.google.com/store/apps/details?id=in.pranaydas.inovact"
            target="_blank"
          >
            <Image
              src="/images/1.png"
              width={200}
              height={200}
              alt=""
              className="lg:w-[120px]  w-[80px] h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
