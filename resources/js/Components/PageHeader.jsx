import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="mt-6 mb-10 ">
      <h2 className="font-semibold text-3xl text-gray-800">{title}</h2>
    </div>
  );
};

export default PageHeader;
