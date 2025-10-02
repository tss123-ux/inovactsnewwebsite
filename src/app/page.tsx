"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import App from "@/components/sections/App";
import Banner from "@/components/sections/Banner";
import Build from "@/components/sections/Build";
import DesktopScroll from "@/components/sections/DesktopScroll";
import Discovery from "@/components/sections/Discovery";
import Effortless from "@/components/sections/Effortless";
import FAQ from "@/components/sections/FAQ";
import Get from "@/components/sections/Get";
import Hero from "@/components/sections/Hero";
import HorizontalScroll1 from "@/components/sections/HorizontalScroll1";
import HorizontalScroll2 from "@/components/sections/HorizontalScroll2";
import Loyal from "@/components/sections/Loyal";
import Opportunities from "@/components/sections/Opportunities";
import Quick from "@/components/sections/Quick";
import Rewarded from "@/components/sections/Rewarded";
import Vibe from "@/components/sections/Vibe";
import Wall from "@/components/sections/Wall";
import Why from "@/components/sections/Why";
import MarqueeText from "@/components/Marquee";

// Animation variants for fade-in effect
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Wrapper component for sections with animation
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
};

const Page = () => {
  const scrollUpRef = useRef<HTMLDivElement>(null);
  const effortref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.play().catch((error) => {
        console.log("Autoplay blocked:", error);
      });
    });
  }, []);

  const scrollUp = () => {
    scrollUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollUpEffort = () => {
    effortref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden relative">
      <div ref={scrollUpRef}>
        <Navbar />
      </div>
      {/* <AnimatedSection> */}
      <Banner />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Hero />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Loyal />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Vibe />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <App />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      {/* <MarqueeText /> */}

      <Opportunities />
      
      <div ref={effortref}>
        <Effortless />
      </div>
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Quick />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Build />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Discovery />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Rewarded />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Why />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Wall />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <FAQ />
      {/* </AnimatedSection> */}
      {/* <AnimatedSection> */}
      <Get />
      {/* </AnimatedSection> */}
      <Footer scrollUp={scrollUp} scrollUpEffort={scrollUpEffort} />
    </div>
  );
};

export default Page;
