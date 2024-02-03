//disciplina de ferro, optimisme i aprenentatge constant
//I do whatever is required to complete my objectives

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Layout from "@/components/Layout";
import ArrowIcon from "@/components/Icons";
import StorySection from "@/components/StorySection";
import FactsSection from "@/components/FactsSection";
import ValuesSection from "@/components/ValuesSection";
import { BookOpenIcon, StarIcon, GiftIcon } from "@heroicons/react/24/outline";

import React from "react";
import Link from "next/link";

const AboutSection = ({ title, anchor = "", icon: IconComponent }) => {
  return (
    <div className="flex items-center rounded-xl p-3 hover:border border-orange-400">
      <Link className="text-gray-600 mr-4 text-xl font-semibold" href={anchor}>
        {title}
      </Link>
      <IconComponent className="h-8 w-8 text-orange-400" />
    </div>
  );
};

export default function About({ className }) {
  return (
    <div>
      <Layout>
        <section className={className}>
          <div className="">
            <div className="place-self-center">
              <h1 className="text-white text-8xl font-extrabold">
                <span className="text-black">
                  Hey, I'm Gabriel <span className="text-orange-400">.</span>
                </span>
              </h1>
              <h2 className="text-6xl font-extrabold flex mt-4">
                <br></br>
                <TypeAnimation
                  style={{ color: "orange" }}
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
              <p className="text-gray-600 text-base sm:text-lg lg:text-3xl w-2/3 mt-10 leading-normal">
                I am on a constant journey of discovery, exploring the intricate
                complexities of our ever-changing world
                {/*through a passion for building and insatiable curiosity. */}
              </p>
            </div>
          </div>
          <div className="pt-12 items-center flex gap-14">
            <AboutSection
              title="My Story"
              anchor="#story_section"
              icon={BookOpenIcon}
            />
            <AboutSection
              title="Values"
              icon={StarIcon}
              anchor="#values_section"
            />
            <AboutSection
              title="Random Facts"
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
