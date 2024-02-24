import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const awsApi = createApi({
  reducerPath: "awsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ze82cjgyq5.execute-api.eu-west-1.amazonaws.com/v1",
  }),
  endpoints: (builder) => ({
    getArticlesList: builder.query({
      query: () => `articles`,
    }),
    getArticle: builder.query({
      query: (id) => ({
        url: `article/${id}`,
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useGetArticlesListQuery } = awsApi;
export const { useGetArticleQuery } = awsApi;
