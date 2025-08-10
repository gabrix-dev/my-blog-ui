// pages/articles/[article_id].js

import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGetArticleQuery, useGetArticlesListQuery } from "@/services/aws";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import { bottomUp } from "@/animationVariants";

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
  var articleMetadata;

  const { data: article, isLoading, isError } = useGetArticleQuery(article_id);
  const { data: articleList, isLoading: isLoadingList, isError: isErrorList } = useGetArticlesListQuery();

  if (!isLoadingList) {
    articleMetadata = articleList.find(article => article.blog_id === article_id);
  }

  if (isError || isErrorList) {
    router.push(`/notfound`)
  }

  return (
    <div>
      <Layout className="min-h-screen lg:!px-[27vw] pt-6 md:!pt-16">
        {isLoading || isLoadingList || isError || isErrorList ? (
          <Loader />
        ) : (
          <motion.div initial="initial" animate="animate" variants={bottomUp}>
            <header className="mt-1 md:mt-2 mb-6 md:mb-8 pb-4 border-b border-gray-200">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-balance">
                {articleMetadata.title}
              </h1>
              <p className="mt-2 text-slate-600 text-base md:text-xl">
                {articleMetadata.subtitle}
              </p>
              <div className="flex items-center gap-3 mt-3 text-slate-500 text-sm md:text-base">
                <span>{articleMetadata.publication_date}</span>
                <span aria-hidden>•</span>
                <span>{articleMetadata.reading_time} read</span>
              </div>
            </header>

            <Image
              src={articleMetadata.cover}
              alt="G-F brand robot welcoming blog readers"
              className="rounded-xl mt-6 aspect-[4/3] shadow-xl shadow-slate-900/10"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />

            <MarkdownRenderer>{article}</MarkdownRenderer>
          </motion.div>
        )}
      </Layout>
    </div>
  );
};

export default Article;
