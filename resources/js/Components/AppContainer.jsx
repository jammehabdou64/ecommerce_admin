import React from "react";

const AppContainer = ({ children }) => {
  return (
    <div className="p-8">
      <div className="bg-green-400 rounded hidden text-white min-w-72 w-fit ml-auto">
        <p className="p-2 tex">Successfully Added</p>
      </div>
      {children}
    </div>
  );
};

export default AppContainer;
