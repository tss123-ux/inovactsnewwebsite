import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Why = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const isLeftInView = useInView(leftDivRef, { once: true, amount: 0.3 });
  const isRightInView = useInView(rightDivRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const featureCardVariants = {
    hidden: (index: any) => ({
      opacity: 0,
      x: index === 0 ? -50 : index === 1 ? 50 : 0,
      y: index === 2 ? 50 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(22, 73, 255, 0.9)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const svgVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="my-20 flex flex-col gap-8 items-center max-w-7xl mx-auto px-4 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-[#1649FF] text-white px-10 py-4 rounded-full w-max flex gap-3 text-xl items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="initial"
          whileHover="hover"
        >
          <path
            d="M14.7188 28C14.2521 28 13.8921 27.5867 13.9588 27.12L15.1588 18.6667H10.4921C9.31882 18.6667 10.0521 17.6667 10.0788 17.6267C11.7588 14.6533 14.2788 10.2533 17.6121 4.38667C17.7455 4.14667 18.0121 4 18.2788 4C18.7455 4 19.1055 4.41333 19.0388 4.88L17.8388 13.3333H22.5188C23.0522 13.3333 23.3455 13.5867 23.0521 14.2133C18.6655 21.8667 16.1188 26.3333 15.3855 27.6133C15.2521 27.8533 14.9988 28 14.7188 28Z"
            fill="white"
          />
        </motion.svg>
        Why Inovact Social?
      </motion.div>

      <div className="w-full grid lg:grid-cols-2 gap-6 lg:gap-8">
        <motion.div
          ref={leftDivRef}
          className="h-full p-8 lg:p-12 from-[#2C94DF] to-[#0061A8] bg-gradient-to-r flex flex-col items-center rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          variants={slideInLeft}
          initial="hidden"
          animate={isLeftInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            animate={isLeftInView ? { rotateY: [180, 0], opacity: [0, 1] } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/49.png"
              alt=""
              width={270}
              height={500}
              className="lg:w-[280px] w-[180px] transform transition-transform duration-300"
            />
          </motion.div>
          <motion.h2
            className="text-slate-50 lg:text-4xl text-2xl font-semibold my-6 text-center"
            variants={titleVariants}
          >
            Why Inovact Social?
          </motion.h2>
        </motion.div>

        <motion.div
          ref={rightDivRef}
          className="h-full flex flex-col gap-6"
          variants={slideInRight}
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex-1 bg-[#C8ECF9] p-8 lg:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            variants={featureCardVariants}
            custom={0}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center lg:text-right">
              Simplicity Rules
            </h2>
            <p className="text-[#535353] lg:text-right text-center leading-relaxed">
              Our 2-step collab process is designed for you. We get how hard it
              can be to find your team, and we&apos;re here to make it happen.
            </p>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              className="h-full bg-[#D8E8DB] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={featureCardVariants}
              custom={1}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
                No BS Zone
              </h2>
              <p className="text-[#535353] leading-relaxed text-center lg:text-left">
                We&apos;re all about building serious & cool stuff. Students and
                early-stage entrepreneurs can work together without the fluff.
              </p>
            </motion.div>

            <motion.div
              className="h-full bg-[#E8D7F1] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={featureCardVariants}
              custom={2}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
                Gamified Experience
              </h2>
              <p className="text-[#535353] leading-relaxed text-center lg:text-left">
                We&apos;re turning hard work into rewards. Your hustle deserves
                recognition, and we&apos;re here to make sure it doesn&apos;t go
                unnoticed.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Why;
