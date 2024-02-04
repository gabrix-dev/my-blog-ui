//disciplina de ferro, optimisme i aprenentatge constant
//I do whatever is required to complete my objectives

import { TypeAnimation } from "react-type-animation";
import Layout from "@/components/Layout";
import StorySection from "@/components/StorySection";
import FactsSection from "@/components/FactsSection";
import ValuesSection from "@/components/ValuesSection";
import { BookOpenIcon, StarIcon, GiftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

import React from "react";
import Link from "next/link";

const AboutSection = ({ title, anchor = "", icon: IconComponent }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg hover:shadow-lg hover:border hover:border-secondary"
    >
      <Link
        className="flex items-center rounded-xl p-3 text-gray-600 text-xl font-semibold justify-between lg:mx-0 mx-5"
        href={anchor}
      >
        <h2>{title}</h2>
        <IconComponent className="h-8 w-8 text-secondary ml-4" />
      </Link>
    </motion.div>
  );
};

export default function About({ className }) {
  return (
    <div>
      <Layout>
        <section className={className}>
          <div>
            <div className="place-self-center">
              <h1 className="lg:text-8xl lg:text-left text-center text-3xl font-extrabold">
                <span className="text-black">
                  Hey, I'm Gabriel <span className="text-secondary">.</span>
                </span>
              </h1>
              <h2 className="lg:text-6xl lg:text-left text-xl font-extrabold flex lg:mt-4 mt-2">
                <br></br>
                <TypeAnimation
                  className="mx-auto lg:mx-0"
                  style={{ color: "#FF8C00" }}
                  sequence={[
                    "a Telecomm Engineer",
                    1000,
                    "a Software Developer",
                    1000,
                    "an AI Enthusiast",
                    1000,
                    "a Dreamer",
                    1000,
                    "a Builder.",
                    6000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className="text-gray-600 text-base text-center sm:text-lg lg:text-3xl lg:w-2/3 mt-10 leading-normal lg:text-left">
                I am on a constant journey of discovery, exploring the intricate
                complexities of our ever-changing world
                {/*through a passion for building and insatiable curiosity. */}
              </p>
            </div>
          </div>
          <div className="pt-12 lg:items-center flex lg:flex-row flex-col lg:gap-14 w-full">
            <AboutSection
              title="Story"
              anchor="#story_section"
              icon={BookOpenIcon}
            />
            <AboutSection
              title="Values"
              icon={StarIcon}
              anchor="#values_section"
            />
            <AboutSection
              title="Facts"
              icon={GiftIcon}
              anchor="#facts_section"
            />
          </div>
          <StorySection />
          <ValuesSection />
          <FactsSection />
        </section>
      </Layout>
    </div>
  );
}
