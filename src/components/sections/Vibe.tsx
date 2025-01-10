import React from "react";
import { motion } from "framer-motion";

const Vibe = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const rotateIn = {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto w-full p-6 lg:px-8 flex items-center justify-between py-14 lg:py-0 flex-col "
    >
      {/* overflow-x-hidden */}
      <motion.div
        variants={staggerChildren}
        className="flex flex-row lg:flex-nowrap flex-wrap items-start justify-start gap-10 lg:gap-20 w-full"
      >
        <motion.div
          variants={fadeInUp}
          className="lg:w-1/2 flex flex-col gap-5"
        >
          <motion.h2
            variants={scaleIn}
            className="lg:text-6xl text-4xl text-[#FF0505] text-left font-medium text-balance max-w-lg leading-[1.3] tracking-tight"
          >
            Vibe Check: The Problem
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-lg lg:text-xl text-base text-zinc-700 leading-relaxed"
          >
            Students have projects, and entrepreneurs have ideas, but
            they&apos;re struggling to find the squad to bring it all to life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          className="lg:w-1/2 relative"
        >
          <motion.div
            variants={rotateIn}
            className="text-gray-200 drop-shadow-lg  z-10  text-8xl font-bold absolute -top-10 left-0 transform -rotate-12"
          ></motion.div>
          <motion.div
            variants={fadeInUp}
            // whileHover={{ scale: 1.02 }}
            className="text-white p-8 bg-[#FF0505] max-w-lg text-lg sm:text-2xl shadow-lg rounded-lg transform hover:shadow-xl transition-all duration-300 border-4 border-white"
          >
            Let&apos;s be real, traditional collab methods are a total drag:
            time-consuming and just plain boring
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Vibe;
