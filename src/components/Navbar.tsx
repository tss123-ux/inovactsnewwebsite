import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const playStoreVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -1, 1, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm h-[11vh]"
      >
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-7xl mx-auto py-4">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex items-center space-x-2 flex-shrink"
          >
            <Link href={"/"} className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/images/48.jpg"
                  alt="Inovact Logo"
                  width={48}
                  height={48}
                  className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]"
                />
              </motion.div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1649FF] to-[#0D2C99] text-sm sm:text-lg lg:text-xl xl:text-2xl font-medium whitespace-nowrap">
                Inovact Private Limited
              </span>
            </Link>
          </motion.div>

          <div className="flex items-center sm:space-x-8">
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:block"
            >
              <Link
                href={"/about"}
                target="_blank"
                className="relative text-gray-700 hover:text-[#1649FF] transition-colors duration-300 py-2 text-lg"
              >
                <span className="relative z-10">About Us</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1649FF] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={playStoreVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="relative group flex-shrink-0"
            >
              <Link
                href="https://play.google.com/store/apps/details?id=in.pranaydas.inovact"
                target="_blank"
                className="block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  animate={isHovered ? { y: -5 } : { y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src="/images/1.png"
                    width={160}
                    height={160}
                    alt="Play Store"
                    className="scale-75 sm:scale-90 lg:scale-100"
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>
      <div className="h-[11vh]" />
    </>
  );
};

export default Navbar;
