import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const StorySection = () => {
  return (
    <div className="mt-96 px-20">
      <SectionTitle title="My Story" />
      <div className="text-3xl text-gray-600 font-medium">
        I was born in 2001 in Girona, Spain.
      </div>
      <Image
        src="/images/girona.jpg"
        alt="G-F brand robot welcoming blog readers"
        className="rounded-xl mt-10 mb-10"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="text-3xl text-gray-600 mt-5 font-medium leading-normal">
        After graduating High School, I moved to Barcelona, Spain, and enrolled
        in Barcelona School of Telecommunications Engineering (UPC). After four
        years of rigorous academic pursuit, I successfully graduated with a
        Bachelor of Science in Telecommunications Engineering degree in 2023.
      </div>
      <Image
        src="/images/graduacio.jpg"
        alt="G-F brand robot welcoming blog readers"
        className="rounded-xl mt-10 mb-10"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="grid grid-cols-2 gap-x-6">
        <p className=" text-lg mt-5 text-justify px-3 font-medium text-gray-600">
          After completing high school, I discovered my passion for math,
          computer science, and physics. Telecommunication engineering appeared
          to be the ideal career choice, offering a broad foundation that
          allowed for specialization in areas like data or software after
          graduation. Despite warnings about its difficulty, I was drawn to the
          challenge, confident that it was the right path for me. Over the four
          years of my degree, I encountered various challenges spanning math,
          electromagnetism, and signal processing. I marveled at the elegance of
          software and complex systems, ultimately choosing to
        </p>
        <p className="col-start-2 col-span-1 max-w-full break-words mt-5 text-lg text-justify px-3 font-medium text-gray-600">
          specialize in telematics for its practical application in building
          things. Post-graduation, my learning journey continues daily, both at
          and outside of work. Currently, I serve as a software developer in the
          R&D department of Entrust, a major company. Our focus is on creating
          proofs of concepts from scratch to enhance our products with new
          technologies and seize opportunities for innovation. Presently, I am
          delving into the world of AI/ML, working on designing and implementing
          a chatbot system that will serve as the backbone for the future LLM
          functionalities across our product line.
        </p>
      </div>
    </div>
  );
};

export default StorySection;
