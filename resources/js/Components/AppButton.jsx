import React from "react";

const AppButton = ({ title, click }) => {
  return (
    <div>
      <button
        onClick={click}
        className="px-4 py-2 text-gray-100 bg-gray-700 rounded-md"
      >
        {title}
      </button>
    </div>
  );
};

export default AppButton;
