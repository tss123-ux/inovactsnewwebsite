import Image from "next/image";
import React from "react";

const Rewarded = () => {
  const videoHtml = `
    <video width="300" autoPlay loop playsinline muted preload="auto" height="820" class="lg:w-[300px] w-[250px] lg:ml-28 p-4">
      <source src="/videos/win.mp4" type="video/mp4"/>
    </video>
  `;

  return (
    <div className="flex w-screen lg:items-center lg:flex-row flex-col lg:justify-center p-6 my-5 lg:my-20">
      {/* Mobile image */}
      <Image
        src="/images/23.svg"
        width={400}
        height={200}
        alt="Reward graphic"
        className="lg:hidden block w-[60%] ml-auto mr-10"
      />

      {/* Video section using dangerouslySetInnerHTML */}
      <div className="lg:w-1/3 max-lg:mx-auto flex lg:items-center lg:justify-center flex-col">
        <div dangerouslySetInnerHTML={{ __html: videoHtml }} />
      </div>

      {/* Text and image section */}
      <div className="lg:w-2/3 h-full">
        <div className="flex flex-col py-10 gap-5 justify-center items-center lg:text-center lg:h-full lg:py-10">
          {/* Desktop image */}
          <Image
            src="/images/23.svg"
            width={400}
            height={200}
            alt="Reward graphic"
            className="lg:block hidden lg:w-[250px] ml-auto mr-10"
          />

          <div className="lg:ml-40 lg:text-left">
            <h2 className="lg:text-5xl text-4xl text-[#1649FF] text-balance leading-[1.3]">
              Get Rewarded
            </h2>
            <p className="lg:text-balance text-zinc-700">
              Interact on the app to rack up points and snag some cool
              incentives. Think discounts and even opportunities for internships
              and jobs.
              <br />
              <br />- This feature is dropping soon, so stay tuned!
            </p>
          </div>

          {/* Additional desktop image */}
          <Image
            src="/images/24.svg"
            width={700}
            height={300}
            alt="Additional reward graphic"
            className="lg:block hidden lg:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Rewarded;
