import React from "react";

const SectionTitle = ({ title, className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mb-10 text-5xl font-bold">
        {title}
        <span className="text-orange-400 text-7xl"> .</span>
      </div>
      {/* <hr className="mb-10 bg-red-700 h-2 w-full mt-5 ml-6" /> */}
    </div>
  );
};

export default SectionTitle;
