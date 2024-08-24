"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Vibe from "./Vibe";
import App from "./App";
import Effortless from "./Effortless";
import Quick from "./Quick";
import Build from "./Build";
import Discovery from "./Discovery";
import Rewarded from "./Rewarded";

const HorizontalScroll2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section className="relative  ">
      <div className=" top-0 flex  h-max flex-col   items-center lg:overflow-hidden">
        <motion.div className="flex  flex-col  gap-4">
          <div className=" h-screen w-screen">
            {" "}
            <Effortless />
          </div>{" "}
          <div className=" h-screen w-screen">
            {" "}
            <Quick />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Build />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Discovery />
          </div>
          <div className="group h-screen w-screen">
            {" "}
            <Rewarded />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll2;
