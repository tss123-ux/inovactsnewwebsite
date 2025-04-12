import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Build = () => {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative min-h-[90vh] flex items-center justify-center py-12 pt-6 lg:pt-12 px-4 sm:px-6 lg:px-8 lg:mb-5 mb-12 bg-white"
    >
      <div className="max-w-7xl w-full lg:flex lg:gap-12 relative z-10">
        {/* Left Column - Video */}
        <motion.div
          variants={videoContainerVariants}
          className="lg:w-1/2 w-full flex items-center justify-center relative z-20"
        >
          <div className="relative p-4 w-full">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl transform rotate-3 scale-105 -z-10" /> */}
            {/* <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden"> */}
            <div
              className="relative z-10"
              dangerouslySetInnerHTML={{
                __html: `
                    <video 
                      width="380" 
                      height="600" 
                      class="w-full max-w-[380px] h-[600px] p-4 mx-auto" 
                      playsinline 
                      autoplay 
                      loop 
                      muted 
                      preload="auto" 
                      data-wf-ignore="true" 
                      data-object-fit="cover"
                    >
                      <source src="/videos/rand1.mp4" type="video/mp4"/>
                    </video>
                  `,
              }}
            />
            {/* </div> */}
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-8 relative z-20">
          <motion.div
            variants={topImageVariants}
            className="relative w-full  mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl transform " />
            <Image
              src="/images/19.svg"
              width={700}
              height={400}
              alt="Build illustration"
              className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300 relative"
              priority
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            className="text-center lg:text-left space-y-4"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl  text-left font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Build Your Cred
            </h2>
            <p className="lg:text-lg text-justify sm:text-start max-w-2xl mx-auto lg:mx-0 text-base text-zinc-700 leading-relaxed">
              Flex your skills and earn some serious street cred through proof
              of work. Get recognized for your projects and collabs, and build a
              following based on what you can actually do.
            </p>
          </motion.div>

          <motion.div
            variants={bottomImageVariants}
            className="relative w-full   mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-xl transform" />
            <Image
              src="/images/18.svg"
              width={700}
              height={400}
              alt="Additional illustration"
              className="relative w-full max-w-lg mx-auto hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Build;
