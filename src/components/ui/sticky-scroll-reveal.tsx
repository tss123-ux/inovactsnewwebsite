"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const StickyScroll = ({ content, contentClassName }: any) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content?.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_: any, index: any) => index / cardLength
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc: any, breakpoint: any, index: any) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="  flex justify-center relative lg:space-x-10 rounded-md lg:p-10 p-2 "
      ref={ref}
    >
      <div
        className={cn(
          "hidden lg:block h-auto max-h-[78vh] w-[45%] rounded-md bg-white sticky top-20 overflow-hidden ",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>{" "}
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item: any, index: any) => (
            <div
              key={item.title + index}
              className="lg:my-20 h-screen items-start flex flex-col justify-center relative gap-16"
            >
              <Image
                src={item.ab1}
                width={700}
                height={400}
                alt=""
                className="lg:block hidden lg:w-[550px]"
              />
              <div className="">
                {" "}
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="lg:text-5xl text-3xl text-[#1649FF] text-balance   lg:leading-[1.3]"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg lg:block hidden text-[#272727] max-w-lg mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
              <motion.h2 className="text-2xl lg:hidden block font-bold text-[#272727]">
                {item.title}
              </motion.h2>
              <motion.p className="text-kg lg:hidden block text-[#272727] max-w-sm mt-10">
                {item.description}
              </motion.p>
              <Image
                src={item.ab2}
                width={700}
                height={400}
                alt=""
                className="lg:block hidden w-[550px]"
              />
              <div
                className={cn(
                  "block lg:hidden h-auto w-full  rounded-md bg-white  overflow-hidden ",
                  contentClassName
                )}
              >
                {content[activeCard].content ?? null}
              </div>{" "}
            </div>
          ))}
          <div className="lg:h-40" />
        </div>
      </div>
    </motion.div>
  );
};
