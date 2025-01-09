import React from "react";
import { motion } from "framer-motion";
import MarqueeText from "../Marquee";

const App = () => {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, // Reduced delay between animations
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto w-full  flex items-center justify-between  p-6 lg:px-8 lg:pt-20 flex-col relative bg-gradient-to-br from-white to-blue-50 lg:mb-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }} // Trigger at 30% in view
        variants={parentVariants}
        className="flex flex-row w-full lg:flex-nowrap flex-wrap justify-start gap-8 lg:gap-20 h-full"
      >
        {/* Left Column */}
        <motion.div className="lg:w-1/2 flex flex-col items-start gap-5">
          <motion.h2
            variants={childVariants}
            transition={{ duration: 0.3 }} // Faster animation
            className="lg:text-6xl text-4xl  text-left font-medium text-[#1649FF] text-balance  lg:px-0 leading-[1.3]"
          >
            Inovact Social: The Solution
          </motion.h2>
          <motion.p
            variants={childVariants}
            transition={{ duration: 0.3 }} // Faster animation
            className="max-w-lg lg:text-xl text-base text-zinc-700 leading-relaxed"
          >
            Connect and collaborate seamlessly, bringing ideas to life with a
            community of innovators.
          </motion.p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="lg:w-1/2 w-full h-full flex  relative"
        >
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              variants={childVariants}
              transition={{ duration: 0.3 }} // Faster animation
              src="/images/12.svg"
              className="lg:w-[400px] w-[250px] lg:h-[200px] h-[125px] object-contain"
              alt="Inovact Social Illustration"
            />
          </motion.div> */}

          <motion.div
            variants={childVariants}
            transition={{ duration: 0.3 }} // Faster animation
            className="text-gray-200  z-10  text-8xl font-bold absolute -top-10 left-0 transform -rotate-12"
          >
            #
          </motion.div>

          <motion.div
            variants={childVariants}
            // whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }} // Faster animation
            className="text-white p-8 bg-[#1649FF] max-w-lg text-lg sm:text-2xl rounded-lg shadow-lg transform transition-all hover:shadow-xl"
          >
            A social network for students and entrepreneurs powered by proof of
            work
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger at 30% in view
        variants={parentVariants}
        className="my-10 w-full text-center"
      >
        <motion.div
          variants={childVariants}
          transition={{ duration: 0.3 }} // Faster animation
          className="my-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 lg:text-[120px] text-5xl font-bold"
        ></motion.div> */}
      {/* </motion.div> */}
    </div>
  );
};

export default App;
