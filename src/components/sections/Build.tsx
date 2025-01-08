import React from "react";
import { motion } from "framer-motion";

const Build = () => {
  // Smooth container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  // Video container animation with subtle float
  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      rotate: -4,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  // Image animations with pop effect
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  // Text content fade up animation
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
      viewport={{ once: true, margin: "-50px" }}
      className="relative min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mobile Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="lg:hidden w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl transform -rotate-2" />
              <img
                src="/images/19.svg"
                alt="Build illustration"
                className="relative w-full rounded-lg"
              />
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            variants={videoContainerVariants}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl transform rotate-2 scale-105" />
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <video
                        class="w-full max-w-[300px] p-4"
                        playsinline
                        autoplay
                        loop
                        muted
                        preload="auto"
                      >
                        <source src="/videos/build.mp4" type="video/mp4" />
                      </video>
                    `,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Desktop Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="hidden lg:block max-w-md mx-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl transform -rotate-1" />
                <img
                  src="/images/19.svg"
                  alt="Build illustration"
                  className="relative w-full rounded-lg"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={textVariants}
              className="max-w-xl mx-auto lg:mx-0 space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Build Your Cred
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Flex your skills and earn some serious street cred through proof
                of work. Get recognized for your projects and collabs, and build
                a following based on what you can actually do.
              </p>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl transform rotate-1" />
                <img
                  src="/images/18.svg"
                  alt="Additional illustration"
                  className="relative w-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Build;
