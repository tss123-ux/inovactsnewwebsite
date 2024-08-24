"use client";
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
import Quick from "@/components/sections/Quick";
import Rewarded from "@/components/sections/Rewarded";
import Vibe from "@/components/sections/Vibe";
import Wall from "@/components/sections/Wall";
import Why from "@/components/sections/Why";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.play().catch((error) => {
        // Handle the error, e.g., autoplay was blocked
        console.log("Autoplay blocked:", error);
      });
    });
  }, []);

  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <Banner />
      <Hero />
      <Loyal />
      {/* <HorizontalScroll1 /> */}
      <Vibe />
      <App />
      <Effortless />
      <Quick />
      <Build />
      <Discovery /> <Rewarded />
      <Why />
      <Wall />
      <FAQ />
      <Get />
      <Footer />
    </div>
  );
};

export default Page;
