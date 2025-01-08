import React from "react";
import { motion } from "framer-motion";

const Discovery = () => {
  // Main container animation
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

  // Video container animation with float effect
  const videoContainerVariants = {
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
        duration: 0.8,
      },
    },
  };

  // Enhanced image animations
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
      rotate: -4,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
    hover: {
      scale: 1.03,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
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
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Mobile Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="lg:hidden w-full max-w-md"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl transform -rotate-2" />
              <img
                src="/images/20.svg"
                alt="Discovery graphic"
                className="relative w-full rounded-lg"
              />
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            variants={videoContainerVariants}
            className="lg:w-1/3 w-full flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl transform rotate-3 scale-105" />
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
                        <source src="/videos/discover.mp4" type="video/mp4" />
                      </video>
                    `,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:w-2/3 space-y-8">
            {/* Desktop Hero Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="hidden lg:block max-w-md"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl transform -rotate-1" />
                <img
                  src="/images/20.svg"
                  alt="Discovery graphic"
                  className="relative w-full rounded-lg"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={textVariants} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Discovery Hub
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Explore, learn, and upskill by checking out projects and ideas
                from other members of our social network. It's like a treasure
                chest of knowledge!
              </p>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="hidden lg:block max-w-md"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl transform rotate-1" />
                <img
                  src="/images/21.svg"
                  alt="Additional discovery graphic"
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

export default Discovery;
