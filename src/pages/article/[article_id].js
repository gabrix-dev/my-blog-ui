// pages/articles/[article_id].js

import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

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
        content: "This is my **first** article",
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
        <h1 className="">{article.title}</h1>
        <Markdown>{article.content}</Markdown>
      </Layout>
    </div>
  );
};

export default Article;
