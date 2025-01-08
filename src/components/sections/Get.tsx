import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Get = () => {
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 1 },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto flex flex-col justify-between items-center px-5 gap-10 py-12 my-20"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#1649FF] to-[#0D2C99] lg:text-7xl text-4xl font-semibold text-center"
        variants={headingVariants}
      >
        Get Inovact Social Now
      </motion.h2>
      <motion.p
        className="lg:text-xl text-sm text-center lg:max-w-2xl text-gray-600"
        variants={paragraphVariants}
      >
        Get in on the action with 3000+ students and entrepreneurs already
        making waves with their projects and ideas. Join us now and be a part of
        the future.
      </motion.p>
      <motion.div variants={buttonVariants} whileHover="hover">
        <Link
          href="https://play.google.com/store/apps/details?id=in.pranaydas.inovact"
          target="_blank"
        >
          <div className="flex justify-center items-center transition-transform duration-300">
            <Image
              src="/images/1.png"
              width={1000}
              height={1000}
              alt="Inovact Social App"
              className="h-auto w-[250px] rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Get;
