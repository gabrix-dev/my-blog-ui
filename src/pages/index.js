import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

import React from "react";

const RobotImage = () => {
  return (
    <Image
      src="/images/gf_robot_welcome.png"
      alt="G-F brand robot welcoming blog readers"
      className=""
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default function Home() {
  return (
    <>
      <main className="flex text-dark w-full min-h-screen">
        <Layout className="lg:!px-32 !p-0">
          <div className="lg:flex-row flex flex-col items-center justify-between w-full lg:mt-28">
            <div className="w-1/3 hidden lg:flex">
              <RobotImage />
            </div>
            <div className="lg:w-3/5 w-3/4 flex flex-col items-center self-center">
              <AnimatedText
                text="Welcome to my Blog!"
                className="lg:text-6xl text-xl lg:!text-left text-center"
              />
              <p className="my-4 lg:pr-24 text-lg font-medium text-center lg:text-left">
                Here, as a technology enthusiast with an insatiable thirst for
                knowledge, I share insights, discoveries, and reflections that
                capture the essence of my ongoing journey of learning.
              </p>
              {/* lg:self-center */}
              <div className="w-52 lg:hidden">
                <RobotImage />
              </div>
              <div className="flex items-center lg:self-start lg:mt-2 mt-9 ">
                <Link
                  href="/articles"
                  className="border-solid border-2 hover:shadow-lg border-transparent hover:border-secondary flex items-center bg-secondary p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-secondary  text-light"
                >
                  Articles
                </Link>
                <Link
                  href="/about"
                  className="ml-4 border-solid border-2 hover:shadow-lg border-secondary text-secondary flex items-center p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-secondary hover:text-light"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
