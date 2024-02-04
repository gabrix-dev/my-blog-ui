import AnimatedText from "@/components/AnimatedText";
import Article from "@/components/Article";
import Featured from "@/components/Featured";
import Layout from "@/components/Layout";
import React from "react";

const ArticlesPage = () => {
  return (
    <Layout className="!py-0">
      <h1 className="text-dark mb-4 lg:text-4xl text-xl lg:text-left text-center font-medium">
        Words can change the world
      </h1>
      {/* <AnimatedText
        className="text-dark mb-4 lg:text-4xl text-xl lg:text-left text-center font-medium"
        text="Words Can Change The World"
      /> */}

      <AnimatedText
        className="w-full text-gray-600 text-base text-center lg:text-left lg:text-4xl mt-5 leading-tight !font-normal"
        text=" In this blog I share ideas, projects, reflections..."
      />
      <Featured className="mt-10" />
      <div className="grid grid-cols-12 gap-x-4 mt-10">
        <Article className="lg:col-span-4 col-span-12 mb-10" />
        <Article className="lg:col-span-4 col-span-12 mb-10" />
        <Article className="lg:col-span-4 col-span-12 mb-10" />
        <Article className="lg:col-span-4 col-span-12 mb-10" />
      </div>
    </Layout>
  );
};

export default ArticlesPage;
