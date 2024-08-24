"use client";
import { Poppins } from "next/font/google";
import React from "react";
import { InfiniteMovingTestimonials } from "@/components/ui/infinite-moving-testimonials";
import Marquee from "../ui/marquee";
import Testimonial from "../cards/Testimonial";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const data = [
  {
    user: "/images/26.svg",
    name: "Sumit Dey",
    desc: "The app works smoothly without any glitch. The interface is simple and easy to use. It is useful for both students as they can collaborate on interesting projects and also entrepreneurs can spot early talent.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjWeWvaQNAVJm4yI1e-4_mXVpKNuqb2fF1e-Hv7K0J6_a21sS48v=s32-rw",
    name: "Anshul Soni",
    desc: "Awesome App,Helped me to get clients!",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjXsFbI_FqELhzOTqfe4-qc-QONy9cj4bAVd_Gh1P9K_xRW3YODb=s32-rw",
    name: "Brahamjot Singh",
    desc: "Great app ❤️ Loved it 😁",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjVfDPIhThVlLGIV5kDCVeeXUrWvLEIl-9OJZqoWRH1o2bm5NbEhLg=s32-rw",
    name: "Pratik",
    desc: "Wonderful idea, and really good user interface, so useful for students like me. Loved it♥️",
  },
  {
    user: "https://play-lh.googleusercontent.com/a/ACg8ocJDBZ0Qk-zs2RhJ_riB0n8H3rzOTATiTIdWKBDjAz49ANeVn3hb=s32-rw-mo",
    name: "Ramnish R",
    desc: "The idea is unique and I enjoyed reading thru the ideas and thoughts feed.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjXM0mVYCapy1HvmgyinGQLCFGvKwe2mKxxn0SuUaJza6IQnKsA4Tg=s32-rw",
    name: "Ajeya Ranga",
    desc: "Nice concept. The app is very easy to use. Hoping to see a lot of features in the upcoming days. Good going!",
  },
  {
    user: "https://play-lh.googleusercontent.com/a/ACg8ocINl94SkRyUTV1v9YMa4MSfNwBRsOZVJx7w6Jw5gM9E5gECrw=s32-rw-mo",
    name: "Nipun Aggarwal",
    desc: "Addresses a very underrated problem statement and bridges the gap b/w Industry and Candidates. Found the app easy to use and feature-rich.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjWwLQlEj2VfHbMbHC0HUJObSubFxzJ6fNylsqAbJfOQP7ICSgHy=s32-rw",
    name: "Ashutosh Gautam",
    desc: "Very nice user experience, clean interface with sleek design. I was amazed by the performance of the app.",
  },
  {
    user: "https://play-lh.googleusercontent.com/a-/ALV-UjV-sluXMxzuKxaE6-sf-YrFUEn3dqU4hB1Q1mYrOusZzLzjB8s=s32-rw",
    name: "Sayan Jana",
    desc: "Hoooo.... loving the quality people's circle. 🤩",
  },
];
const Wall = () => {
  return (
    <div className="lg:my-20 flex flex-col  items-center justify-center px-8 mx-auto max-w-7xl relative ">
      <div
        className={`${poppins.className} text-xl bg-[#1649FF] text-white flex gap-4 rounded-full px-8 py-2 items-center`}
      >
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5013 28.7831L14.568 27.0231C7.7013 20.7964 3.16797 16.6897 3.16797 11.6497C3.16797 7.54307 6.39464 4.31641 10.5013 4.31641C12.8213 4.31641 15.048 5.39641 16.5013 7.10307C17.9546 5.39641 20.1813 4.31641 22.5013 4.31641C26.608 4.31641 29.8346 7.54307 29.8346 11.6497C29.8346 16.6897 25.3013 20.7964 18.4346 27.0364L16.5013 28.7831Z"
            fill="white"
          />
        </svg>
        Wall of Love
      </div>

      <div className="flex flex-col gap-5 mt-10 lg:my-10 items-center[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] max-w-[98vw] ">
        <Marquee pauseOnHover className="[--duration:60s]">
          {data.map((review, idx) => (
            <Testimonial key={idx} data={review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Wall;
