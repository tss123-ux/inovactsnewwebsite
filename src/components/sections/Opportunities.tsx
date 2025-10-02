import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Opportunities = () => {
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
      className="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:mb-7 mb-12 mt-10 lg:mt-24"
    >
      <div className="max-w-7xl w-full lg:flex lg:gap-12">
        {/* Left Column - Content */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center h-full space-y-6 mt-12">
          <motion.div
            variants={textVariants}
            className="text-center lg:text-left space-y-4 py-4"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Land Paid Opportunities
            </h2>
            <p className="lg:text-lg max-w-2xl text-left mx-auto lg:mx-0 text-base text-zinc-700 leading-relaxed">
              Inovact Social is resume-free and here is a chance for you to land paid opportunities like internship and full time jobs solely based on your skillset through your proof of work.
            </p>
          </motion.div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <motion.div
              variants={topImageVariants}
              className="relative flex-1 max-w-xs"
            >
              <Image
                src="/images/io1.jpg"
                width={300}
                height={180}
                alt="Paid opportunities illustration"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </motion.div>

            <motion.div
              variants={bottomImageVariants}
              className="relative flex-1 max-w-xs"
            >
              <Image
                src="/images/io2.jpg"
                width={300}
                height={180}
                alt="Skill-based hiring process"
                className="w-full h-auto hover:scale-105 transition-transform duration-300 rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column - Video */}
        <motion.div
          variants={videoContainerVariants}
          className="lg:w-1/2 w-full flex items-center justify-center"
        >
          <div className="relative p-2 sm:p-4 max-w-lg mx-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <video width="600" height="800" class="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[600px] h-auto aspect-[3/4] mx-auto object-cover rounded-lg" playsinline autoplay loop muted preload="auto" data-wf-ignore="true" data-object-fit="cover">
                    <source src="/videos/rand6.mp4" type="video/mp4"/>
                    </video>
                    `,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Opportunities;
