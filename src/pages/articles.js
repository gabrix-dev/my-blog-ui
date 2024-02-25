import AnimatedText from "@/components/AnimatedText";
import ArticleCard from "@/components/Article";
import Featured from "@/components/Featured";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { React } from "react";
import { motion } from "framer-motion";
import { bottomUp } from "@/animationVariants";
import { useGetArticlesListQuery } from "@/services/aws";
import Loader from "@/components/Loader";


const ArticlesPage = () => {
  const router = useRouter();
  const { data, error, isLoading } = useGetArticlesListQuery();

  return (
    <Layout className="!py-0">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <motion.h1
            className="text-dark mb-4 lg:text-4xl text-xl lg:text-left text-center font-medium"
            initial="initial"
            animate="animate"
            variants={bottomUp}
          >
            Words can change the world
          </motion.h1>

          <AnimatedText
            className="w-full text-gray-600 text-base text-center lg:text-left lg:text-2xl xl:text-4xl mt-5 leading-tight !font-normal"
            text=" In this blog I share ideas, projects, reflections..."
          />
          <Featured className="mt-10" article={data[0]} />
          <div className="grid grid-cols-12 gap-x-4 mt-10">
            {data.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
                className="lg:col-span-4 col-span-12 mb-10"
              />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};

export default ArticlesPage;
