import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Effortless = () => {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:mb-7 mb-12 mt-10 lg:mt-24"
    >
      <div className="max-w-7xl w-full lg:flex lg:gap-12">
        {/* Left Column */}
        <motion.div
          variants={videoContainerVariants}
          className="lg:w-1/2 w-full flex items-center justify-center"
        >
          <div className="relative p-4">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <video width="380" height="600" class="w-[380px] h-[600px] p-0" playsinline autoplay loop muted preload="auto" data-wf-ignore="true" data-object-fit="cover">
                    <source src="https://res.cloudinary.com/dp7wm24gz/video/upload/v1744738300/rand5_fqdelu.mp4" type="video/mp4"/>
                  </video>
                `,
              }}
            />
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-8">
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
            <h2 className="text-2xl md:text-4xl lg:text-5xl  text-left font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Find Your Crew
              <br />
              {/* <span className="text-gray-800">Find Your Crew</span> */}
            </h2>
            <p className="lg:text-lg max-w-2xl text-justify sm:text-start mx-auto lg:mx-0 text-base text-zinc-700 leading-relaxed">
              Find a teammate or co-founder for your project or idea in just two
              steps—easy peasy! Connect with like-minded innovators and bring
              your vision to life.
            </p>
          </motion.div>

          <motion.div
            variants={bottomImageVariants}
            className="relative w-full  mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-xl transform" />
            <Image
              src="/images/13.svg"
              width={700}
              height={400}
              alt="Collaboration process"
              className="relative max-w-lg mx-auto w-full hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Effortless;
