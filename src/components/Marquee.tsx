import React from "react";
import Marquee from "./ui/marquee";

const MarqueeText = () => {
  const text = "Inovact social";
  const repeatedText = Array(10).fill(text);

  return (
    <div className="relative w-full overflow-hidden my-24">
      {/* Using MagicUI Marquee component */}
      <Marquee pauseOnHover className="[--duration:50s]">
        {repeatedText.map((text, index) => (
          <div
            key={index}
            className="mx-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 text-2xl lg:text-3xl font-bold"
          >
            {text}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeText;
