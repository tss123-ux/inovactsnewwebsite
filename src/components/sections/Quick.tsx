import Image from "next/image";
import React from "react";

const Quick = () => {
  return (
    <div className="flex w-screen lg:items-center lg:justify-center items-start justify-start lg:flex-row-reverse flex-col p-6 max-lg:my-5">
      <Image
        src="/images/15.svg"
        width={700}
        height={400}
        alt=""
        className="lg:hidden block w-full"
      />
      <div className="lg:w-1/3 max-lg:mx-auto flex items-center justify-center">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <video width="300" autoPlay loop playsinline muted preload="auto" height="820" class="lg:w-[300px] w-[250px] p-4">
                <source src="/videos/join.mp4" type="video/mp4"/>
              </video>
            `,
          }}
        />
      </div>
      <div className="lg:max-w-[50%]">
        <div className="flex flex-col py-10 gap-5 lg:items-center lg:justify-center">
          <Image
            src="/images/15.svg"
            width={700}
            height={400}
            alt=""
            className="lg:block hidden w-[550px]"
          />
          <h2 className="lg:text-5xl text-4xl lg:text-left lg:mr-auto text-[#1649FF] text-balance leading-[1.3]">
            Quick Join
          </h2>
          <div className="lg:max-w-[400px] mr-auto">
            <p className="text-balance text-left lg:mr-auto text-zinc-700">
              Dive into projects and ideas that spark your interest with a
              single tap. No more wasting time!
            </p>
          </div>
          <Image
            src="/images/16.svg"
            width={700}
            height={400}
            alt=""
            className="lg:w-[550px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Quick;
