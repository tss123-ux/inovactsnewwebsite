import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1649FF] text-white py-10 px-5 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-7 p-2">
        <div className="">
          <h2 className="text-2xl font-medium mb-2">Inovact Private Limited</h2>
          <p>
            Address : #731, E & F Block , Kuvempunagar, Mysore - 570023
            <br /> Email: inovacteam@gmail.com
            <br /> Phone: +91 8296024720
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="">
            <h2 className="text-2xl font-medium mb-2">Company</h2>
            <Link href="/about">
              <h3>About Us </h3>
            </Link>
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
        </div>
        <div className="md:static absolute top-5 right-5">
          <Link href="#" className="">
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
      </div>
      <div className="max-w-7xl mx-auto items-center justify-center mt-10">
        <div className="">
          <div className="text-4xl text-center my-10">
            @Join Inovact community{" "}
          </div>
          <div className="flex items-center justify-center gap-10 flex-wrap">
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
        <div className="mt-10 text-center text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} All rights reserved by Inovact
          Private Limited
        </div>
      </div>
    </div>
  );
};

export default Footer;
