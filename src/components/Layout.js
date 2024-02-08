import React from "react";
import Footer from "./Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`${className} bg-light py-16 lg:px-[17vw] px-10 `}>
      {children}
    </div>
  );
};

export default Layout;
