import React from "react";
import { Link } from "react-router-dom";
// import Alert from "./Alert";
import { PlusIcon } from "@heroicons/react/24/outline";
import TableHeader from "./TableHeader";

const Table = ({ children, title, buttonName, pathTo, data }) => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
        <h1 className="text-blue font-semibold text-3xl">{title}</h1>
        <div>
          {pathTo && buttonName && (
            <Link
              className="bg-gray-900 inline-flex items-center h-9 px-2 text-small text-indigo-100 transition-colors duration-150 rounded-lg focus:shadow-outline"
              to={pathTo}
            >
              {" "}
              <PlusIcon className="w-4" />
              {buttonName}
            </Link>
          )}
        </div>
      </div>
      <div>{/* <Alert /> */}</div>
      {/*  */}
      <div className="col-span-12 mt-3 pt-3 bg-white">
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
          <div className="p-4 shadow-lg rounded-lg">
            {/* div */}
            {/* div */}
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto">
                <div className="py-2 align-middle  inline-block min-w-full">
                  <div className="shadowy overflow-hidden  border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <TableHeader headers={data} />
                      {children}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
