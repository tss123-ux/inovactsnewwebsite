import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Background reveal animation
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Launch button animation
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Icon pop-up animation on hover
  const iconHoverVariants = {
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Heading text animation (word by word)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Phone image animation
  const phoneVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotate: -5,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
        duration: 1,
      },
    },
    hover: {
      scale: 1.1,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
      className="relative h-[110vh] bg-[url('/images/2.svg')] bg-center bg-cover min-h-[600px] w-full "
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start py-16 lg:py-20 gap-8 lg:gap-12">
          {/* Launch button */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link
              href="https://youtu.be/vd5O47IF6xY?si=jRD8gTg6hUJACtuq"
              target="_blank"
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-full text-indigo-600 flex items-center gap-3 px-6 py-3 shadow-lg transition-all duration-300 hover:bg-white">
                <motion.div whileHover={iconHoverVariants.hover}>
                  <Image
                    src="/images/3.svg"
                    alt="Launch icon"
                    width={30}
                    height={30}
                    className="lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]"
                  />
                </motion.div>
                <p className="font-medium text-sm lg:text-base">
                  Watch the Launch
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center font-bold text-balance lg:text-5xl text-2xl leading-relaxed text-white max-w-3xl"
          >
            A social network for students and entrepreneurs powered by
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              proof of work
            </span>
          </motion.h1>

          {/* Phone image */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-90" />

            <Image
              src="/images/49.png"
              width={1000}
              height={1200}
              alt="App showcase"
              className="relative lg:-mb-[27%] -mb-[50%] lg:w-[370px] w-[250px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
