import Image from "next/image";
import React from "react";

const Effortless = () => {
  return (
    <div
      className="flex w-screen lg:h-screen lg:items-center gap-5 justify-start items-start lg:justify-between max-w-7xl mx-auto max-lg:my-5 p-6 lg:flex-row flex-col"
      id="effortless"
    >
      <Image
        src="/images/14.svg"
        width={700}
        height={400}
        alt=""
        className="lg:hidden block w-full mx-auto"
      />
      <div className="lg:w-1/3 max-lg:mx-auto flex lg:items-center lg:justify-center">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <video class="lg:w-[300px] w-[250px] p-4" playsinline autoplay loop muted preload="auto" data-wf-ignore="true" data-object-fit="cover">
                <source src="/videos/look.mp4" type="video/mp4"/>
              </video>
            `,
          }}
        />
      </div>
      <div className="lg:w-2/3">
        <div className="flex flex-col mt-auto h-auto lg:justify-center lg:items-center py-10 gap-5">
          <Image
            src="/images/14.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden lg:w-[450px]"
          />
          <div className="max-w-3xl flex items-center justify-center flex-col">
            <h2 className="lg:text-4xl text-3xl text-[#1649FF] text-balance text-left max-w-max lg:w-[500px] lg:leading-[1.3]">
              Seamless Collaboration: Find Your Crew
            </h2>
            <p className="text-zinc-700 lg:pl-10 lg:max-w-xl mx-auto">
              Find a teammate or co-founder for your project or idea in just two
              steps—easy peasy!
            </p>
          </div>
          <Image
            src="/images/13.svg"
            width={700}
            height={400}
            alt=""
            className="lg:w-[450px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Effortless;
