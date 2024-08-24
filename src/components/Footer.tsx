import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1649FF] text-white lg:pt-20 pt-32 px-5 relative">
      <div className="max-w-7xl mx-auto flex justify-between flex-wrap lg:gap-0 gap-7 p-2">
        <div className="">
          <h2 className="text-2xl font-medium mb-2">Inovact social</h2>
          <p>
            Address : #731, E & F Block , Kuvempunagar, Mysore - 570023
            <br /> Email: inovacteam@gmail.com
            <br /> Phone: +91 8296024720
          </p>
        </div>
        <div className="">
          <h2 className="text-2xl font-medium mb-2">Product</h2>
          <Link href="/#effortless">
            <h3>Features </h3>
          </Link>
          <Link href="/#">
            {" "}
            <h3>Join community </h3>
          </Link>
        </div>
        {/* <div className="">
          {" "}
          <h2 className="text-2xl font-medium mb-2">Company </h2>
          <h3>About us </h3>
          <h3>Contact us </h3>
        </div> */}
        <Link href="#" className="lg:static absolute top-10 right-4">
          {" "}
          <div className="">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#E7E0F5" />
              <path
                d="M21.88 32.9425L28 26.8358L34.12 32.9425L36 31.0625L28 23.0625L20 31.0625L21.88 32.9425Z"
                fill="#7000A3"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="max-w-7xl  mx-auto items-center justify-center">
        <div className="">
          <div className="lg:text-6xl text-4xl text-center my-10">
            @Join Inovact community{" "}
          </div>
          <div className="flex items-center justify-center gap-10">
            <Link
              href="https://chat.whatsapp.com/GClxUdUctuaEUeWmJmNYHo"
              target="_blank"
            >
              <Image src="/images/33.svg" alt="" width={50} height={50} />
            </Link>
            <Link
              href="https://www.instagram.com/inovact__/?utm_medium=copy_link"
              target="_blank"
            >
              <Image src="/images/34.svg" alt="" width={50} height={50} />
            </Link>{" "}
            <Link
              href="https://www.linkedin.com/company/inovact-pvt-ltd2/mycompany/"
              target="_blank"
            >
              <Image src="/images/35.svg" alt="" width={50} height={50} />
            </Link>
          </div>
        </div>
        <div className="mt-10">&copy; 2024 All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
