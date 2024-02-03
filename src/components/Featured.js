import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Featured = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`${className} hover:border border-amber-600 p-1 rounded-lg`}
    >
      <div
        className={` w-full bg-gray-100 rounded-lg py-20 px-16 grid grid-cols-2 gap-4 hover:cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <h1 className="font-semibold">Featured article</h1>
            <h1 className="text-4xl font-medium mt-5">Starting a Blog </h1>
            <h1 className="text-lg font-semibold text-slate-400 mt-5">
              January 26th, 2024 - 5 min read
            </h1>
          </div>
          <div className="">
            <div
              className={`font-semibold text-lg underline decoration-orange-500  ${
                isHovered ? "underline underline-offset-2" : "no-underline"
              }`}
            >
              Read full article
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <Image
            className="aspect-[4/3] lg:aspect-[4/5] rounded-xl mx-auto"
            src="/images/gf_about_me.png"
            alt="G-F brand robot welcoming blog readers"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "70%", height: "auto" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Featured;
