import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { bottomUp } from "@/animationVariants";

const StorySection = () => {
  return (
    <div className="mt-96 lg:px-20" id="story_section">
      <SectionTitle title="My Story" variants={bottomUp} />
      <motion.div
        className="lg:text-3xl text-md text-gray-600 text-center lg:text-left font-medium"
        initial="initial"
        variants={bottomUp}
        whileInView="animate"
        viewport={{ once: true }}
      >
        I was born in 2001 in Girona, Spain.
      </motion.div>
      <motion.div
        initial="initial"
        variants={bottomUp}
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Image
          src="/images/girona.jpg"
          alt="G-F brand robot welcoming blog readers"
          className="rounded-xl mt-10 mb-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>

      <motion.div
        initial="initial"
        variants={bottomUp}
        whileInView="animate"
        viewport={{ once: true }}
        className="lg:text-3xl text-md text-gray-600 mt-5 font-medium leading-normal lg:text-left text-center"
      >
        After graduating High School, I moved to Barcelona, Spain, and enrolled
        in Barcelona School of Telecommunications Engineering (UPC). After four
        years of rigorous academic pursuit, I successfully graduated with a
        Bachelor of Science in Telecommunications Engineering degree in 2023.
      </motion.div>
      <motion.div
        initial="initial"
        variants={bottomUp}
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Image
          src="/images/graduacio.jpg"
          alt="G-F brand robot welcoming blog readers"
          className="rounded-xl mt-10 mb-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-2 lg:gap-x-6 grid-cols-1"
        initial="initial"
        variants={bottomUp}
        whileInView="animate"
        viewport={{ once: true }}
      >
        <p className=" lg:text-lg text-sm mt-5 text-justify px-3 font-medium text-gray-600">
          Through high school I discovered my passion for math, physics and
          technology in general. Telecomm. engineering appeared to be the ideal
          career choice, offering a broad foundation that allowed for
          specialization in areas like data or software after graduation,
          althoug not being the main focus. Despite warnings about its
          difficulty, I was drawn to the challenge, confident that it was the
          right path for me. Over the four years of my degree, I encountered
          various challenges spanning signal processing, networks and the math
          behind communications. I discovered programming, and realized how
          empowering it was, as it allowed me to build anything I wanted.
        </p>
        <p className="col-span-1 max-w-full break-words mt-5 lg:text-lg text-sm text-justify px-3 font-medium text-gray-600">
          After graduating, my learning journey continues daily, both professionally and in personal projects.
          I have chosen to focus on becoming a product builder, creating solutions that address real-world problems.
          Currently, I work as a backend developer at a Cybersecurity AI startup, a fast-paced environment that aligns
          perfectly with my desire for big challenges. Before this, I gained valuable experience at Entrust, a large
          corporation, where I worked in the R&D department and led the development of the first version of Entrust Copilot,
          going from research to implementation. In my free time, I am developing a project that aims to revolutionize how
          teachers correct and generate exercises, which I plan to launch in 2025.
        </p>
      </motion.div>
    </div>
  );
};

export default StorySection;
