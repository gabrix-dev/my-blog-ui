import { store } from "@/app/store";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Not Just a Developer</title>
        <meta
          name="description"
          content="Gabriel Fortià's personal site"
          key="desc"
        />{" "}
        <meta name="og:description" content="Gabriel Fortià's personal site" />
        <meta
          name="og:title"
          content="Not Just a Developer by Gabriel Fortià"
        />
        <meta
          name="og:image"
          content="https://i.postimg.cc/0j2JrNBL/blog-UI.png"
        />
      </Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BC9RJ7VH8J"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BC9RJ7VH8J');
        `,
        }}
      ></script>
      <Provider store={store}>
        <main
          className={`${montserrat.variable} font-mont bg-white  w-full min-h-screen`}
        >
          <NavBar />
          <Component {...pageProps} />
          <Footer className="" />
        </main>
      </Provider>
      <SpeedInsights />
    </>
  );
}
