import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlipWords } from "../ui/flip-words";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        yoyo: Infinity,
      },
    },
  };

  const sparkleVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <Link href="https://chat.whatsapp.com/GClxUdUctuaEUeWmJmNYHo">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] h-[10vh]"
          animate={{
            backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        <div className="relative bg-gradient-to-r from-[#25D366]/90 to-[#128C7E]/90 py-4 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 sm:gap-4 lg:ml-36 ">
              <div className="flex items-center space-x-2">
                <motion.span
                  // variants={sparkleVariants}
                  // initial="initial"
                  // animate="animate"
                  className="text-yellow-300 text-xl"
                >
                  ✨
                </motion.span>
                <p className="text-white font-medium text-xs sm:text-sm lg:text-base">
                  Join the Inovact WhatsApp Community and vibe with over 2000{" "}
                  <FlipWords
                    className="w-[9rem] inline-block text-white text-left"
                    words={[
                      "students",
                      "developers",
                      "mentors",
                      "entrepreneurs",
                    ]}
                  />
                </p>
              </div>

              <AnimatePresence>
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  className="hidden lg:block"
                >
                  <motion.button
                    className="bg-white text-[#0D2C99] px-4 py-2 rounded-xl font-medium 
                             transform transition-all duration-300 hover:bg-opacity-90
                             focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  >
                    Join now
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Join Button - Shows only on small screens */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden fixed bottom-4 right-4 z-50"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="bg-white text-[#25D366] px-6 py-2 rounded-full font-medium shadow-lg
                     transform transition-all duration-300 hover:bg-opacity-90"
          >
            Join now
          </motion.button>
        </motion.div> */}
      </motion.div>
    </Link>
  );
};

export default Banner;
