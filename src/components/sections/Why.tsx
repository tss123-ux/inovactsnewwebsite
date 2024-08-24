import Image from "next/image";
import React from "react";

const Why = () => {
  return (
    <div className="my-20 flex flex-col gap-5 items-center max-w-7xl mx-auto">
      <div className="bg-[#1649FF] text-white px-10 py-3 rounded-full w-max flex gap-2 text-xl items-center">
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7188 28C14.2521 28 13.8921 27.5867 13.9588 27.12L15.1588 18.6667H10.4921C9.31882 18.6667 10.0521 17.6667 10.0788 17.6267C11.7588 14.6533 14.2788 10.2533 17.6121 4.38667C17.7455 4.14667 18.0121 4 18.2788 4C18.7455 4 19.1055 4.41333 19.0388 4.88L17.8388 13.3333H22.5188C23.0522 13.3333 23.3455 13.5867 23.0521 14.2133C18.6655 21.8667 16.1188 26.3333 15.3855 27.6133C15.2521 27.8533 14.9988 28 14.7188 28Z"
            fill="white"
          />
        </svg>
        Why Inovact Social?
      </div>
      <div className="w-full lg:p-10 p-4 flex lg:gap-5 gap-2 justify-between">
        <div className="lg:w-1/2 lg:p-10 p-6 from-[#2C94DF] to-[#0061A8] bg-gradient-to-r flex  flex-col items-center rounded-[3px]">
          <Image
            src="/images/49.png"
            alt=""
            width={270}
            height={500}
            className="lg:w-[220px] w-[130px]"
          />
          <h2 className="text-slate-50 lg:text-3xl text-center text-base font-medium my-5">
            Why Inovact Social?
          </h2>
        </div>
        <div className="lg:w-1/2 flex-1 flex  flex-col lg:gap-5 gap-2">
          <div className="bg-[#C8ECF9]  lg:p-10 p-4 lg:h-1/2 h-1/3 w-full flex flex-col items-center justify-center text-right gap-3 rounded-[3px]">
            <h2 className="lg:text-right text-center w-full lg:text-3xl lg:font-semibold text-base">
              Simplicity Rules{" "}
            </h2>
            <p className="text-sm text-[#535353] lg:block hidden">
              Our 2-step collab process is designed for you. We get how hard it
              can be to find your team, and we’re here to make it happen.
            </p>
          </div>
          <div className="lg:h-1/2 h-2/3 w-full flex flex-wrap lg:flex-nowrap lg:gap-5 gap-2  ">
            <div className="bg-[#D8E8DB] p-5 lg:h-full rounded-[3px] lg:w-1/2 flex gap-5 flex-col items-start overflow-clip w-full justify-center text-center lg:text-left">
              <h2 className="lg:font-medium lg:text-2xl text-base max-lg:mx-auto">
                No BS Zone
              </h2>
              <p className="text-sm lg:block hidden text-[#535353]">
                We’re all about building serious & cool stuff. Students and
                early-stage entrepreneurs can work together without the fluff.
              </p>
            </div>
            <div className="bg-[#E8D7F1]  lg:h-full w-full rounded-[3px] p-4 gap-4 lg:w-1/2 flex flex-col items-center justify-center lg:text-left text-center">
              <h2 className="lg:font-medium lg:text-2xl text-base">
                Gamified Experience
              </h2>
              <p className="text-sm lg:block hidden text-[#535353]">
                We’re turning hard work into rewards. Your hustle deserves
                recognition, and we’re here to make sure it doesn’t go
                unnoticed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
