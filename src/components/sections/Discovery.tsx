import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Discovery = () => {
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

  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 10,
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

  const topImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 30,
      rotate: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const bottomImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotate: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:mb-16 bg-white"
    >
      <div className="max-w-7xl w-full lg:flex lg:gap-12 relative z-10">
        {/* Left Column - Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-8 relative z-20">
          <motion.div
            variants={topImageVariants}
            className="relative w-full max-w-lg mx-auto"
          >
            <Image
              src="/images/20.svg"
              width={700}
              height={400}
              alt="Discovery hub illustration"
              className="w-full transform hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            className="text-center lg:text-left space-y-4"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl  text-left font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Discovery Hub
            </h2>
            <p className="lg:text-lg text-justify sm:text-start max-w-2xl mx-auto lg:mx-0 text-base text-zinc-700 leading-relaxed">
              Explore, learn, and upskill by checking out projects and ideas
              from other members of our social network. It&apos;s like a
              treasure chest of knowledge!
            </p>
          </motion.div>

          <motion.div
            variants={bottomImageVariants}
            className="relative w-full  mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-xl transform" />
            <Image
              src="/images/21.svg"
              width={700}
              height={400}
              alt="Discovery process"
              className="relative w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column - Video */}
        <motion.div
          variants={videoContainerVariants}
          className="lg:w-1/2 w-full flex items-center justify-center relative z-20"
        >
          <div className="relative p-4 w-full">
            <div className="relative z-10">
              <video
                width="380"
                height="600"
                className="w-full max-w-[380px] h-[600px] p-0 mx-auto"
                playsInline
                autoPlay
                loop
                muted
                preload="auto"
              >
                <source
                  src="/videos/rand3.mp4"
                  // src="https://res.cloudinary.com/dp7wm24gz/video/upload/v1744738337/rand3_l5d82t.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Discovery;
