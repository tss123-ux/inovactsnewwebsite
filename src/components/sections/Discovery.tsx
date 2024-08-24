import Image from "next/image";
import React from "react";

const Discovery = () => {
  const videoHtml = `
    <video width="300" autoPlay loop playsinline muted preload="auto" height="820" class="lg:w-[300px] w-[250px] p-4">
      <source src="/videos/discover.mp4" type="video/mp4"/>
    </video>
  `;

  return (
    <div className="flex w-screen max-w-7xl mx-auto lg:items-center lg:flex-row-reverse flex-col justify-center lg:p-0 p-6 max-lg:my-5">
      <Image
        src="/images/20.svg"
        width={700}
        height={200}
        alt="Discovery graphic"
        className="lg:hidden block w-full"
      />

      <div className="lg:w-1/3 max-lg:mx-auto flex lg:items-center lg:justify-center">
        <div dangerouslySetInnerHTML={{ __html: videoHtml }} />
      </div>

      <div className="lg:max-w-[50%] h-full">
        <div className="flex flex-col py-10 lg:h-full gap-5 justify-center">
          <Image
            src="/images/20.svg"
            width={700}
            height={200}
            alt="Discovery graphic"
            className="lg:block hidden w-[450px]"
          />
          <h2 className="lg:text-5xl text-4xl text-[#1649FF] text-balance">
            Discovery Hub
          </h2>
          <p className="text-balance text-zinc-700">
            Explore, learn, and upskill by checking out projects and ideas from
            other members of our social network. It’s like a treasure chest of
            knowledge!
          </p>
          <Image
            src="/images/21.svg"
            width={700}
            height={500}
            alt="Additional discovery graphic"
            className="lg:block hidden w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Discovery;
