// pages/articles/[article_id].js

import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { EyeIcon } from "@heroicons/react/24/outline";
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

  return (
    <div>
      <Layout className="min-h-screen lg:!px-[30vw]">
        {isLoading || isLoadingList ? (
          <Loader/>
        ) : (
          <motion.div initial="initial" animate="animate" variants={bottomUp}>
            <h1 className="text-left text-6xl font-bold">{articleMetadata.title}</h1>
            <h2 className="text-gray-600 text-2xl mt-8">{articleMetadata.subtitle}</h2>
            <div className="flex gap-6 items-center mt-5 border-t border-b border-gray-300 py-2">
              <h1 className="text-md font-normal text-slate-600">
               {articleMetadata.publication_date} - {articleMetadata.reading_time} read
              </h1>
              <div className="flex items-center ">
                <EyeIcon className="w-5 h-5 text-gray-600" />
                <span className="ml-2">374</span>
              </div>
            </div>

            <Image
              src={articleMetadata.cover}
              alt="G-F brand robot welcoming blog readers"
              className="rounded-xl mt-6 aspect-[4/3] "
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
