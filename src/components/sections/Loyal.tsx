import Image from "next/image";
import React from "react";
import Marquee from "../ui/marquee";
import { motion } from "framer-motion";

const logos = [
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
  "/images/9.svg",
  "/images/10.svg",
  "/images/11.svg",
  "/images/37.jpeg",
  "/images/38.jpg",
  "/images/39.png",
  "/images/40.png",
  "/images/41.png",
  "/images/42.png",
  "/images/43.png",
  "/images/44.webp",
  "/images/45.png",
  "/images/46.png",
  "/images/47.jpeg",
];

const Loyal = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Heading animation with gradient text reveal
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Logo hover animation
  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      rotate: 0,
      boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        scale: { type: "spring", stiffness: 300, damping: 20 },
        boxShadow: { duration: 0.3 },
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-24  mb-5 sm:mb-0 lg:my-[330px] lg:mt-[220px] lg:mb-[40px] lg:py-20 pt-20 max-w-[100vw] overflow-hidden mx-auto"
    >
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" /> */}

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={headingVariants}
          className="text-center sm:mb-10 px-4"
        >
          <h2 className="lg:text-4xl text-2xl   bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Members on Inovact Social{" "}
            <span className="hidden sm:inline-block">come from</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 rounded-full mx-auto max-w-[200px]"
          />
        </motion.div>

        <div className="w-full relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex flex-row lg:gap-14 gap-12 items-center justify-center">
            <div className="flex flex-col gap-5 my-10 max-w-[98vw]">
              <Marquee pauseOnHover className="[--duration:40s] py-4">
                {logos.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    variants={logoVariants}
                    initial="initial"
                    whileHover="hover"
                    className="mx-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={logo}
                      width={200}
                      height={200}
                      alt="Company logo"
                      className="lg:w-[200px] aspect-square object-contain lg:h-[120px] w-[70px] h-[70px] filter  hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loyal;
