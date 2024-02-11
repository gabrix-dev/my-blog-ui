import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Layout className=" w-full !px-0 !pb-8">
        <footer className="flex items-center justify-between flex-col gap-6 border-t-2 border-solid border-gray-200 mt-20 ">
          {/* <footer className="w-full font-medium text-lg  text-gray-500"> */}

          <div className="flex items-centers mt-10 text-2xl font-light text-dark">
            Built with{" "}
            <span className="text-secondary text-3xl px-2">&#9825;</span>
            by Gabriel Fortià
          </div>
          <h1 className="text-gray-400 text-xl font-medium">
            <span className="italic">
              “Fire proves gold, adversity proves men”
            </span>{" "}
            - Seneca
          </h1>
          <span className=" text-sm text-gray-800">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </footer>
      </Layout>
    </div>
  );
};

export default Footer;
