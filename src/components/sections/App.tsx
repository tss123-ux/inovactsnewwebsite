import Image from "next/image";
import React from "react";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto  w-screen flex items-center justify-between pt-12 p-6  flex-col relative ">
      <div className="flex flex-row w-full lg:flex-nowrap flex-wrap  justify-start  gap-20 h-full ">
        <div className="lg:w-1/2 flex flex-col items-start gap-5 ">
          <h2 className="lg:text-6xl text-4xl text-[#1649FF] text-balance xl:pl-10 2xl:pl-20 lg:px-0 leading-[1.3]">
            Inovact Social: The Solution
          </h2>
          <p className="max-w-lg text-2xl"></p>
        </div>
        <div className="lg:w-1/2 w-full h-full">
          <Image
            src="/images/12.svg"
            width={800}
            height={800}
            className="lg:w-[400px] w-[250px] lg:h-[200px] h-[125px] justify-self-end ml-auto"
            alt=""
          />
          <div className="text-[#1649FF] text-8xl">#</div>
          <div className="text-white p-8 bg-[#1649FF] max-w-lg text-2xl">
            A social network for students and entrepreneurs powered by proof of
            work
          </div>
        </div>
      </div>

      {/* <div className="my-10 lg:text-[160px] flex text-5xl font-medium">
        Inovact social
      </div> */}
    </div>
  );
};

export default App;
