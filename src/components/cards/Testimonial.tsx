import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

const Testimonial = ({ data }: any) => {
  return (
    <div className="bg-[#EBEFFF] flex h-max flex-col gap-5 rounded-3xl w-full  p-8 flex-auto max-w-[250px] lg:max-w-[450px]">
      <div className="flex gap-3 items-center">
        <div>
          <img
            src={data.user}
            alt=""
            width={50}
            height={50}
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <div className="euclid">
          <div className="lg:text-2xl text-base">{data.name}</div>
          {/* <div className={`${poppins.className} lg:text-xl text-sm`}>
            {data.desig}
          </div> */}
        </div>
      </div>
      <div className={`${poppins.className} lg:text-base text-xs`}>
        &#34;{data.desc}&#34;
      </div>
    </div>
  );
};

export default Testimonial;
