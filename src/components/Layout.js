import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`${className} bg-light py-16 px-[17vw]`}>{children}</div>
  );
};

export default Layout;
