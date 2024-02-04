import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Article = ({ className = "" }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.4 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`${className} rounded-lg `}
    >
      <Image
        className="aspect-[3/4] rounded-lg  hover:border border-amber-600 p-1"
        src="/images/gf_about_me.png"
        alt="G-F brand robot welcoming blog readers"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h1 className="text-lg font-semibold text-slate-600 mt-5">
        January 26th, 2024 - 5 min read
      </h1>
      <h1 className="text-xl font-bold mt-5">Embedding Models</h1>
    </motion.div>
  );
};

export default Article;
