import React from "react";
import { navLists } from "~/shared/constant";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-gray-100">
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
      </div>
      <nav className="text-sm">
        <ul className="mt-6">
          {navLists.map(({ path, title, Icon }, index) => (
            <li
              key={index}
              className=" py-2 hover:bg-gray-700 cursor-pointer  "
            >
              <Link
                className="flex font-medium text-lg py-1 items-center"
                to={path}
              >
                <span className="px-5">{<Icon className="w-6" />}</span>{" "}
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
