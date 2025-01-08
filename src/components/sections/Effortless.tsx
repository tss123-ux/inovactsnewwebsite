import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Effortless = () => {
  // Container animation with subtle scale and fade
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
  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -10,
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

  // Top image pop and rotate animation
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

  // Bottom image slide and scale animation
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

  // Text animations
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
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Column */}
        <motion.div
          variants={videoContainerVariants}
          className="relative flex flex-col items-center lg:items-end justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl transform rotate-6 scale-105" />
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-fit">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <video class="w-full scale-75" playsinline autoplay loop muted preload="auto" data-wf-ignore="true" data-object-fit="cover">
                      <source src="/videos/look.mp4" type="video/mp4"/>
                    </video>
                  `,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="relative flex flex-col justify-center space-y-8">
          <motion.div
            variants={topImageVariants}
            className="relative w-full max-w-lg mx-auto"
          >
            <Image
              src="/images/14.svg"
              width={700}
              height={400}
              alt="Collaboration illustration"
              className="w-full transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            className="text-center lg:text-left space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Seamless Collaboration:
              <br />
              <span className="text-gray-800">Find Your Crew</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Find a teammate or co-founder for your project or idea in just two
              steps—easy peasy! Connect with like-minded innovators and bring
              your vision to life.
            </p>
          </motion.div>

          <motion.div
            variants={bottomImageVariants}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-xl transform -rotate-3" />
            <Image
              src="/images/13.svg"
              width={700}
              height={400}
              alt="Collaboration process"
              className="relative w-full hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Effortless;
