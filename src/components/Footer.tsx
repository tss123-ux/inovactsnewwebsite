import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Footer = ({
  scrollUp,
  scrollUpEffort,
}: {
  scrollUp: any;
  scrollUpEffort: any;
}) => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const popOutVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-[#1649FF] text-white py-10 px-5 relative"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-7 p-2">
        <motion.div variants={fadeInUpVariants}>
          <h2 className="text-xl sm:text-2xl font-medium mb-2">
            Inovact Private Limited
          </h2>
          <p className="text-sm sm:text-base">
            Address: #731, E & F Block, Kuvempunagar, Mysore - 570023
            <br /> Email: inovacteam@gmail.com
            <br /> Phone: +91 8296024720
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-col md:flex-row gap-5"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-medium mb-2">Company</h2>
            <Link href="/about">
              <h3 className="hover:text-gray-300 text-sm sm:text-base transition-colors">
                About Us
              </h3>
            </Link>
            <Link href="/talent" target="_self">
              <h3 className="hover:text-gray-300 text-sm sm:text-base transition-colors">
                LaunchPad
              </h3>
            </Link>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-medium mb-2">Product</h2>
            <div onClick={scrollUpEffort}>
              <h3 className="hover:text-gray-300 text-sm sm:text-base transition-colors cursor-pointer">
                Features
              </h3>
            </div>
            <div onClick={scrollUp}>
              <h3 className="hover:text-gray-300 text-sm sm:text-base transition-colors cursor-pointer">
                Join community
              </h3>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={popOutVariants}
          className="md:static absolute right-5 top-[39vh] lg:top-5 lg:right-5 "
          onClick={scrollUp}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <rect width="56" height="56" rx="28" fill="#E7E0F5" />
            <path
              d="M21.88 32.9425L28 26.8358L34.12 32.9425L36 31.0625L28 23.0625L20 31.0625L21.88 32.9425Z"
              fill="#7000A3"
            />
          </svg>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto items-center justify-center mt-10">
        <motion.div variants={fadeInUpVariants}>
          <div className="text-2xl font-medium lg:text-4xl text-center my-10">
            @Join Inovact community
          </div>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            <Link
              href="https://chat.whatsapp.com/GClxUdUctuaEUeWmJmNYHo"
              target="_blank"
            >
              <Image
                src="/images/33.svg"
                alt="WhatsApp"
                width={50}
                height={50}
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </Link>
            <Link
              href="https://www.instagram.com/inovact__/?utm_medium=copy_link"
              target="_blank"
            >
              <Image
                src="/images/34.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/inovact-pvt-ltd2/mycompany/"
              target="_blank"
            >
              <Image
                src="/images/35.svg"
                alt="LinkedIn"
                width={50}
                height={50}
                className="transition-transform duration-300 transform hover:scale-110"
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          className="mt-10 text-center text-xs sm:text-sm"
        >
          &copy; {new Date().getFullYear()} All rights reserved by Inovact
          Private Limited
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
