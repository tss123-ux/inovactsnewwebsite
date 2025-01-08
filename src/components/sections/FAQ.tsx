import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FAQComp from "../FAQ";

const generalFaq = [
  {
    question: "Why do I need to showcase my proof of work?",
    answer:
      "POW builds credibility, gives confidence, and differentiates you from others. It is always better to have proof of your project or idea than just speaking about it.",
  },
  {
    question: "Why do I need a team?",
    answer:
      "Simple logic: There is a certain limit to an individual's capacity. Having the right team can help you build projects and ideas faster and more efficiently.",
  },
  {
    question: "Why do I need a mentor?",
    answer:
      "A few skills and practices take a long to master. But with the experience and guidance of a mentor, the learning curve gets reduced, with lesser obvious mistakes and faster learning.",
  },
  {
    question: "Why should I work on projects and ideas?",
    answer:
      "There is a saying which says 'You only learn when you do'. Application-based learning enhances your conceptual knowledge and gives you a chance to make practical mistakes and learn from them.",
  },
  {
    question: "Who can join Inovact Social as a mentor?",
    answer:
      "There is no age bias for mentors on Inovact Social. If you're a person with some practical experience and knowledge in a particular domain/stream, you're good to go as a mentor on Inovact Social.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const toggleFaq = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={sectionRef}
      className="my-20 lg:my-32 flex flex-col items-center justify-center px-4 lg:px-8 mx-auto max-w-7xl relative"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div className="relative mb-12 lg:mb-16" variants={headerVariants}>
        <motion.div
          className="text-xl bg-[#1649FF] text-white flex gap-4 rounded-full px-8 py-3 items-center shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(22, 73, 255, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="font-bold text-2xl"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            ?
          </motion.span>
          FAQ&#39;s
          <motion.div
            className="absolute -right-2 -top-2 w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full backdrop-blur-sm bg-white/50 rounded-2xl p-6 lg:p-8 shadow-lg"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {generalFaq.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1,
                  },
                },
              }}
            >
              <div
                className="cursor-pointer text-xl font-semibold text-[#1649FF] flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <motion.div
                className="mt-2 text-gray-600"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                  transition: { duration: 0.4 },
                }}
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
