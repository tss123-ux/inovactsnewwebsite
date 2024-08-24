"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Vibe from "./Vibe";
import App from "./App";

const HorizontalScroll1 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section className="relative  overflow-hidden">
      <div className=" top-0 flex  items-center overflow-hidden">
        <motion.div className="flex  gap-4">
          <div className="group h-screen w-screen">
            {" "}
            <Vibe />
          </div>{" "}
          <div className="group h-screen w-screen">
            {" "}
            <App />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll1;
