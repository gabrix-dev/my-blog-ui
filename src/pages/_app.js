import { store } from "@/app/store";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Provider } from "react-redux";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      </Head>
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
