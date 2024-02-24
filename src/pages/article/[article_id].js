// pages/articles/[article_id].js

import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Markdown from "react-markdown";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useGetArticleQuery } from "@/services/aws";

function getArticleId() {
  if (typeof window !== "undefined") {
    let url = window.location.pathname;
    const parts = url.split("/");
    const articleId = parts[parts.length - 1];
    return articleId;
  }
  return;
}

const Article = () => {
  const router = useRouter();
  var article_id = getArticleId();

  const { data: article, isLoading, isError } = useGetArticleQuery(article_id);

  return (
    <div>
      <Layout className="min-h-screen">
        {isLoading ? (
          <h1>Loading...</h1> // Display "Loading..." when loading is true
        ) : (
          <>
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
          </>
        )}
      </Layout>
    </div>
  );
};

export default Article;
