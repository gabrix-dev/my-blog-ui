import AnimatedText from "@/components/AnimatedText";
import ArticleCard from "@/components/Article";
import Featured from "@/components/Featured";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { bottomUp } from "@/animationVariants";

const ArticlesPage = () => {
  const router = useRouter();
  const [articles, setArticles] = useState(null); // Initially set articles to null
  const [loading, setLoading] = useState(true); // Initially set loading to true

  useEffect(() => {
    // Function to fetch articles from the S3 link
    const fetchArticles = async () => {
      try {
        // Make a request to your S3 link to fetch articles
        const response = await fetch(
          "https://ze82cjgyq5.execute-api.eu-west-1.amazonaws.com/v1/articles"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        // Assuming the response is in JSON format
        const data = await response.json();
        setArticles(data); // Set the fetched articles in state
        setLoading(false); // Set loading to false after fetching articles
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchArticles(); // Call the fetchArticles function when component mounts
  }, []);

  return (
    <Layout className="!py-0">
      {loading ? (
        <motion.h1>Loading...</motion.h1> // Display "Loading..." when loading is true
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
            className="w-full text-gray-600 text-base text-center lg:text-left lg:text-4xl mt-5 leading-tight !font-normal"
            text=" In this blog I share ideas, projects, reflections..."
          />
          <Featured className="mt-10" />
          <div className="grid grid-cols-12 gap-x-4 mt-10">
            {articles.map((article, index) => (
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
