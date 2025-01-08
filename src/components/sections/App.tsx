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
    <div className="max-w-7xl mx-auto w-full min-h-screen flex items-center justify-between pt-12 p-6 flex-col relative bg-gradient-to-br from-white to-blue-50">
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
            className="lg:text-6xl text-4xl font-bold text-[#1649FF] text-balance xl:pl-10 2xl:pl-20 lg:px-0 leading-[1.3]"
          >
            Inovact Social: The Solution
          </motion.h2>
          <motion.p
            variants={childVariants}
            transition={{ duration: 0.3 }} // Faster animation
            className="max-w-lg text-2xl text-gray-600 xl:pl-10 2xl:pl-20 lg:px-0"
          >
            Connect and collaborate seamlessly, bringing ideas to life with a
            community of innovators.
          </motion.p>
        </motion.div>

        {/* Right Column */}
        <motion.div className="lg:w-1/2 w-full h-full flex flex-col items-end">
          <motion.div
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
          </motion.div>

          <motion.div
            variants={childVariants}
            transition={{ duration: 0.3 }} // Faster animation
            className="text-[#1649FF] text-8xl font-bold my-4"
          >
            #
          </motion.div>

          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }} // Faster animation
            className="text-white p-8 bg-[#1649FF] max-w-lg text-2xl rounded-lg shadow-lg transform transition-all hover:shadow-xl"
          >
            A social network for students and entrepreneurs powered by proof of
            work
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
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
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default App;
