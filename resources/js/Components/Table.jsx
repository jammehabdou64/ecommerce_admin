import React from "react";
import { Link } from "react-router-dom";
// import Alert from "./Alert";
import { PlusIcon } from "@heroicons/react/24/outline";
import TableHeader from "./TableHeader";

const Table = ({ children, columns }) => {
  return (
    <div>
      <div className="col-span-12 pt-3 bg-white mt-4">
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
          <div className="p-4 shadow-lg rounded-lg">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto">
                <div className="py-2 align-middle  inline-block min-w-full">
                  <div className="shadowy overflow-hidden  border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <TableHeader headers={columns} />
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
