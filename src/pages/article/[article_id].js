// pages/articles/[article_id].js

import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { EyeIcon } from "@heroicons/react/24/outline";

function getArticleId() {
  let url = window.location.pathname;
  const parts = url.split("/");
  const articleId = parts[parts.length - 1];
  return articleId;
}

const Article = () => {
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  var article_id = "";

  useEffect(() => {
    article_id = getArticleId();
    const fetchArticle = async () => {
      try {
        console.log("ARTICLE ID: " + article_id);
        const response = await fetch(
          `https://ze82cjgyq5.execute-api.eu-west-1.amazonaws.com/v1/article/${article_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.text();
        console.log(data);
        setArticle(data); // Set the fetched article in state
        setLoading(false); // Set loading to false after fetching article
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchArticle(); // Call the fetchArticles function when component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Layout className="min-h-screen">
        <h1 className="text-left text-6xl font-bold">Hardcoded title</h1>
        <h2 className="text-gray-600 text-2xl mt-8">Hardcoded subtitle</h2>
        <div className="flex gap-6 items-center mt-5 border-t border-b border-gray-300 py-2">
          <h1 className="text-md font-normal text-slate-600">
            January 26th, 2024 - 5 min read
          </h1>
          <div className="flex items-center ">
            <EyeIcon className="w-5 h-5 text-gray-600" />
            <span className="ml-2">374</span>
          </div>
        </div>

        <Image
          src="/images/gf_about_me.png"
          alt="G-F brand robot welcoming blog readers"
          className="rounded-xl mt-6"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "100%" }}
        />

        <Markdown className="markdown">{article}</Markdown>
      </Layout>
    </div>
  );
};

export default Article;
