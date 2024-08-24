import React from "react";

const Vibe = () => {
  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden w-screen flex items-center justify-between py-14 lg:py-28 flex-col p-6">
      <div className="flex flex-row lg:flex-nowrap flex-wrap items-start justify-start gap-20">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <h2 className="lg:text-6xl text-4xl text-[#FF0505] text-balance max-w-lg leading-[1.3]">
            Vibe Check: The Problem
          </h2>
          <p className="max-w-lg lg:text-xl text-base text-zinc-700">
            Students have projects, and entrepreneurs have ideas, but they’re
            struggling to find the squad to bring it all to life. 
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="text-[#FF0505] text-8xl">#</div>
          <div className="text-white p-8 bg-[#FF0505] max-w-lg text-2xl">
            Let’s be real, traditional collab methods are a total drag
            time-consuming and just plain boring
          </div>
        </div>
      </div>
      {/* <div className="mt-20 lg:text-[160px] text-4xl font-medium">
        Inovact social
      </div> */}
    </div>
  );
};

export default Vibe;
