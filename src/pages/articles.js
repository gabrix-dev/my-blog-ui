import Article from "@/components/Article";
import Featured from "@/components/Featured";
import Layout from "@/components/Layout";
import React from "react";

const ArticlesPage = () => {
  return (
    <Layout>
      <h1 className="text-dark mb-4 text-4xl font-medium">
        Words can change the world
      </h1>
      <div className="w-full text-gray-600 text-base sm:text-lg lg:text-4xl mt-5 leading-tight">
        In this blog I share ideas, projects, reflections...
      </div>
      <Featured className="mt-10" />
      <div className="grid grid-cols-12 gap-x-4 mt-10">
        <Article className="col-span-4 mb-10" />
        <Article className="col-span-4 mb-10" />
        <Article className="col-span-4 mb-10" />
      </div>
    </Layout>
  );
};

export default ArticlesPage;
