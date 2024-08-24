import React from "react";
import FAQComp from "../FAQ";
const generalFaq = [
  {
    question: "Why do I need to showcase my proof of work?",
    answer:
      "POW builds credibility, gives confidence, and differentiates you from others. It is always better to have proof of your project or idea than just speaking about it.",
  },
  {
    question: "Why do I need a team?",
    answer:
      "Simple logic: There is a certain limit to an individual’s capacity. Having the right team can help you build projects and ideas faster and more efficiently.",
  },
  {
    question: "Why do I need a mentor?",
    answer:
      "A few skills and practices take a long to master. But with the experience and guidance of a mentor, the learning curve gets reduced, with lesser obvious mistakes and faster learning.",
  },
  {
    question: "Why should I work on projects and ideas?",
    answer:
      "There is a saying which says ‘You only learn when you do’. Application-based learning enhances your conceptual knowledge and gives you a chance to make practical mistakes and learn from them.",
  },
  {
    question: "Who can join Inovact Social as a mentor?",
    answer:
      "There is no age bias for mentors on Inovact Social. If you’re a person with some practical experience and knowledge in a particular domain/stream, you're good to go as a mentor on Inovact Social.",
  },
];

const FAQ = () => {
  return (
    <div className="my-20 flex flex-col  items-center justify-center px-8 mx-auto max-w-7xl">
      <div
        className={`text-xl bg-[#1649FF] text-white flex gap-4 rounded-full px-8 py-2 items-center`}
      >
        <span className="font-bold">?</span>
        FAQ&#39;s
      </div>
      <FAQComp faqs={generalFaq} />
    </div>
  );
};

export default FAQ;
