import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Quick = () => {
  // Main container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Video container animation
  const videoVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      rotate: 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Image animations
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  // Text content animation
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex w-screen lg:items-center lg:justify-center items-start justify-start lg:flex-row-reverse flex-col p-6 max-lg:my-5 overflow-hidden"
    >
      {/* Mobile Image */}
      <motion.div
        variants={imageVariants}
        whileHover="hover"
        className="lg:hidden block w-full"
      >
        <Image
          src="/images/15.svg"
          width={700}
          height={400}
          alt=""
          className="w-full"
        />
      </motion.div>

      {/* Video Section */}
      <motion.div
        variants={videoVariants}
        className="lg:w-1/3 max-lg:mx-auto flex items-center justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl transform rotate-3 scale-105" />
          <div
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: `
                <video width="300" autoPlay loop playsinline muted preload="auto" height="820" class="lg:w-[300px] w-[250px] p-4">
                  <source src="/videos/join.mp4" type="video/mp4"/>
                </video>
              `,
            }}
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="lg:max-w-[50%]">
        <div className="flex flex-col py-10 gap-8 lg:items-center lg:justify-center">
          {/* Desktop Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="lg:block hidden"
          >
            <Image
              src="/images/15.svg"
              width={700}
              height={400}
              alt=""
              className="w-[550px]"
            />
          </motion.div>

          {/* Text Content */}
          <motion.h2
            variants={textVariants}
            className="lg:text-5xl text-4xl lg:text-left lg:mr-auto text-[#1649FF] text-balance leading-[1.3] font-bold"
          >
            Quick Join
          </motion.h2>

          <motion.div
            variants={textVariants}
            className="lg:max-w-[400px] mr-auto"
          >
            <p className="text-balance text-left lg:mr-auto text-zinc-700 text-lg leading-relaxed">
              Dive into projects and ideas that spark your interest with a
              single tap. No more wasting time!
            </p>
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="w-full"
          >
            <Image
              src="/images/16.svg"
              width={700}
              height={400}
              alt=""
              className="lg:w-[550px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Quick;
