import React from "react";
import { motion } from "framer-motion";

const Rewarded = () => {
  // Keeping the same animation variants
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

  const videoContainerVariants = {
    hidden: {
      opacity: 0,
      x: -40,
      rotate: -4,
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
      scale: 0.8,
      x: 30,
      rotate: 8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      rotate: -4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
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
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const bottomImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
      rotate: -6,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.03,
      rotate: 3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mobile Image */}
          <motion.div
            variants={topImageVariants}
            whileHover="hover"
            className="lg:hidden w-[60%] ml-auto mr-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl transform -rotate-2" />
              <img
                src="/images/23.svg"
                alt="Reward graphic"
                className="relative w-full rounded-lg"
              />
            </div>
          </motion.div>

          {/* Video Section - Fixed width issues */}
          <motion.div
            variants={videoContainerVariants}
            className="w-auto lg:w-1/3 flex justify-center" // Changed width handling
          >
            <div className="relative w-fit">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl transform rotate-2 scale-105" /> */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <video
                        class="w-[250px] lg:w-[300px] lg:ml-28 p-4" 
                        playsinline
                        autoplay
                        loop
                        muted
                        preload="auto"
                      >
                        <source src="/videos/win.mp4" type="video/mp4" />
                      </video>
                    `,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:w-2/3 space-y-8">
            {/* Desktop Top Image */}
            <motion.div
              variants={topImageVariants}
              whileHover="hover"
              className="hidden lg:block max-w-[250px] ml-auto mr-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl transform -rotate-1" />
                <img
                  src="/images/23.svg"
                  alt="Reward graphic"
                  className="relative w-full rounded-lg"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={textVariants} className="lg:ml-40 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Get Rewarded
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Interact on the app to rack up points and snag some cool
                incentives. Think discounts and even opportunities for
                internships and jobs.
                <br />
                <br />
                <span className="font-medium text-indigo-600">
                  - This feature is dropping soon, so stay tuned!
                </span>
              </p>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              variants={bottomImageVariants}
              whileHover="hover"
              className="hidden lg:block max-w-[450px] mx-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl transform rotate-1" />
                <img
                  src="/images/24.svg"
                  alt="Additional reward graphic"
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

export default Rewarded;
