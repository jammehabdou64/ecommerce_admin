import React from "react";
import Sidebar from "./Sidebar";
import Alert from "./Alert";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-scroll px-5">
        <Alert />
        {children}
      </div>
    </div>
  );
};

export default Layout;
