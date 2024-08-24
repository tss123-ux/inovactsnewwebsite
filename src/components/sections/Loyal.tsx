import Image from "next/image";
import React from "react";
import Marquee from "../ui/marquee";
const logos = [
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
  "/images/9.svg",
  "/images/10.svg",
  "/images/11.svg",
  "/images/37.jpeg",
  "/images/38.jpg",
  "/images/39.png",
  "/images/40.png",
  "/images/41.png",
  "/images/42.png",
  "/images/43.png",
  "/images/44.webp",
  "/images/45.png",
  "/images/46.png",
  "/images/47.jpeg",
];
const Loyal = () => {
  return (
    <div
      className="mt-48 lg:mt-[330px] lg:py-20 
     max-w-[100vw] overflow-clip mx-auto flex items-center justify-center flex-col gap-8"
    >
      <h2 className="lg:text-4xl text-center text-2xl">
        Members on Inovact Social come from
      </h2>
      <div className="flex flex-row lg:gap-14 gap-12 items-center justify-center">
        <div className="flex flex-col gap-5 my-10 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] max-w-[98vw]">
          <Marquee pauseOnHover className="[--duration:40s]">
            {logos.map((logo, idx) => (
              <Image
                src={logo}
                key={idx}
                width={200}
                height={200}
                alt=""
                className="lg:w-[200px] aspect-square object-contain mx-3 lg:h-[120px] w-[70px] h-[70px]"
              />
            ))}
          </Marquee>
        </div>{" "}
      </div>
    </div>
  );
};

export default Loyal;
