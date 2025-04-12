"use client";
import { Poppins } from "next/font/google";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "../ui/marquee";
import Image from "next/image";

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const data = [
  {
    user: "https://play-lh.googleusercontent.com/a/ACg8ocKdy9S0ALbpPb_3iM2rlIoLYgiPEX_CSFvwAjP2gQi_O7wPbQ=s32-rw-mo",
    name: "Sumit Dey",
    desc: "The app works smoothly without any glitch. The interface is simple and easy to use. It is useful for both students as they can collaborate on interesting projects and also entrepreneurs can spot early talent.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjWeWvaQNAVJm4yI1e-4_mXVpKNuqb2fF1e-Hv7K0J6_a21sS48v=s32-rw",
    name: "Anshul Soni",
    desc: "Awesome App,Helped me to get clients!",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjXsFbI_FqELhzOTqfe4-qc-QONy9cj4bAVd_Gh1P9K_xRW3YODb=s32-rw",
    name: "Brahamjot Singh",
    desc: "Great app ❤️ Loved it 😁",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjVfDPIhThVlLGIV5kDCVeeXUrWvLEIl-9OJZqoWRH1o2bm5NbEhLg=s32-rw",
    name: "Pratik",
    desc: "Wonderful idea, and really good user interface, so useful for students like me. Loved it♥️",
  },
  {
    user: "https://play-lh.googleusercontent.com/a/ACg8ocJDBZ0Qk-zs2RhJ_riB0n8H3rzOTATiTIdWKBDjAz49ANeVn3hb=s32-rw-mo",
    name: "Ramnish R",
    desc: "The idea is unique and I enjoyed reading thru the ideas and thoughts feed.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjXM0mVYCapy1HvmgyinGQLCFGvKwe2mKxxn0SuUaJza6IQnKsA4Tg=s32-rw",
    name: "Ajeya Ranga",
    desc: "Nice concept. The app is very easy to use. Hoping to see a lot of features in the upcoming days. Good going!",
  },
  {
    user: "https://play-lh.googleusercontent.com/a/ACg8ocINl94SkRyUTV1v9YMa4MSfNwBRsOZVJx7w6Jw5gM9E5gECrw=s32-rw-mo",
    name: "Nipun Aggarwal",
    desc: "Addresses a very underrated problem statement and bridges the gap b/w Industry and Candidates. Found the app easy to use and feature-rich.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjWwLQlEj2VfHbMbHC0HUJObSubFxzJ6fNylsqAbJfOQP7ICSgHy=s32-rw",
    name: "Ashutosh Gautam",
    desc: "Very nice user experience, clean interface with sleek design. I was amazed by the performance of the app.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjV-sluXMxzuKxaE6-sf-YrFUEn3dqU4hB1Q1mYrOusZzLzjB8s=s32-rw",
    name: "Sayan Jana",
    desc: "Hoooo.... loving the quality people's circle. 🤩",
  },
];
// New Tweet-like card component
const TweetCard = ({ data }: { data: any }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 mx-3 w-80 hover:bg-gray-50 transition-colors">
    <div className="flex items-start space-x-3">
      <Image
        src={data.user}
        alt={data.name}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-gray-900">{data.name}</p>
          <svg
            className="h-5 w-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
          </svg>
        </div>
        <p className="text-gray-600 mt-1 text-sm leading-relaxed">
          {data.desc}
        </p>
        <div className="flex items-center space-x-4 mt-3">
          <button className="text-gray-500 hover:text-red-500 transition-colors">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-blue-500 transition-colors">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-green-500 transition-colors">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Wall = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const titleVariants = {
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

  const heartbeatAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

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

  return (
    <motion.div
      className="lg:my-20 lg:mb-0 lg:mt-24 py-16 flex flex-col items-center justify-center px-4 lg:px-8 mx-auto max-w-7xl relative bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Reduced blur decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-100 rounded-full blur-xl" />
      </motion.div>

      <motion.div
        ref={headerRef}
        className="relative"
        variants={titleVariants}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
      >
        <motion.div
          className={`${poppins.className} text-xl bg-[#1649FF] text-white flex gap-4 rounded-full px-8 py-3 items-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(22, 73, 255, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={heartbeatAnimation}
          >
            <path
              d="M16.5013 28.7831L14.568 27.0231C7.7013 20.7964 3.16797 16.6897 3.16797 11.6497C3.16797 7.54307 6.39464 4.31641 10.5013 4.31641C12.8213 4.31641 15.048 5.39641 16.5013 7.10307C17.9546 5.39641 20.1813 4.31641 22.5013 4.31641C26.608 4.31641 29.8346 7.54307 29.8346 11.6497C29.8346 16.6897 25.3013 20.7964 18.4346 27.0364L16.5013 28.7831Z"
              fill="white"
            />
          </motion.svg>
          Wall of Love
          <motion.div
            className="absolute -right-2 -top-2 w-4 h-4 bg-red-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
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
        className="flex flex-col gap-5 mt-10 lg:my-10 w-full overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Reduced width gradient overlays */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <Marquee pauseOnHover className="[--duration:60s] py-4" reverse={false}>
          {data.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <TweetCard data={review} />
            </motion.div>
          ))}
        </Marquee>
        <Marquee reverse={true} pauseOnHover className="[--duration:60s] py-4">
          {data.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <TweetCard data={review} />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
};

export default Wall;
