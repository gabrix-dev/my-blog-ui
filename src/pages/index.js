import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import { buttonVariants, zoomInOut, bottomUp } from "../animationVariants.js";
import SyntaxHighlighter from 'react-syntax-highlighter';

import React from "react";
import { useGetArticlesListQuery } from "@/services/aws.js";

const RobotImage = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={zoomInOut}>
      <Image
        src="/images/gf_robot_welcome.png"
        className=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
};

export const CustomLink = ({ title, route, className = "", icon: Icon, target }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <Link
        href={route}
        className={`p-2.5 px-6 flex rounded-lg text-lg font-semibold hover:shadow-lg ${className}`}
      >
        {Icon && <Icon className="mr-2 !w-6 h-auto" />} {/* Render the icon if provided */}
        {title}
      </Link>
    </motion.div>
  );
};

export default function Home() {

  useGetArticlesListQuery();

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
                className="2xl:text-6xl xl:text-5xl lg:text-4xl sm:text-3xl text-2xl lg:!text-left text-center"
              />
              <motion.p
                className="my-4 lg:pr-24 lg:text-lg text-md font-medium text-center lg:text-left"
                initial="initial"
                animate="animate"
                variants={bottomUp}
              >
                Here, as a technology enthusiast with an insatiable thirst for
                knowledge, I share insights, discoveries, and reflections that
                capture the essence of my ongoing journey of learning.
              </motion.p>
              {/* lg:self-center */}
              <div className="w-52 lg:hidden">
                <RobotImage />
              </div>
              <div className="flex items-center lg:self-start lg:mt-2 mt-9 ">
                <CustomLink
                  route="/articles"
                  className="border-solid border-2 border-transparent bg-secondary text-light"
                  title="Articles"
                />
                <CustomLink
                  route="/about"
                  className="ml-4 border-solid border-2 border-secondary text-secondary"
                  title="About"
                />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
