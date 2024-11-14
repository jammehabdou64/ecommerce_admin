import React from "react";

const TableHeader = ({ headers, cssStyle }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={
              cssStyle
                ? cssStyle
                : "px-6 py-4 bg-gray-100 text-xs leading-4 font-mediumtext-gray-500 uppercase tracking-wider border"
            }
          >
            <div className="flex">
              <span className="mr-2">{header}</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
