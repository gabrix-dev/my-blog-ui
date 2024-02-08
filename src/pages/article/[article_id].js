// pages/articles/[article_id].js

import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { EyeIcon } from "@heroicons/react/24/outline";

const Article = () => {
  const router = useRouter();
  const { article_id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const mockArticle = {
        id: article_id,
        title: "Starting a Blog",
        subtitle: "Why I started a blog and how I built it",
        cover:
          "https://d1lf7jq9a5epx3.cloudfront.net/wp-content/uploads/sites/4/2022/02/what-is-a-blog-1200x600-1.jpeg",
        content: "# Introduction",
      };
      setArticle(mockArticle);
    };

    if (article_id) {
      fetchArticle();
    }
  }, [article_id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Layout className="min-h-screen">
        <h1 className="text-left text-6xl font-bold">{article.title}</h1>
        <h2 className="text-gray-600 text-2xl mt-8">{article.subtitle}</h2>
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

        <Markdown className="markdown">{article.content}</Markdown>
      </Layout>
    </div>
  );
};

export default Article;
