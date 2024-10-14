import React from "react";

const DashboardCard = ({ total, title, Icon }) => {
  return (
    <div className="card-single flex justify-around p-[2em] rounded-sm bg-white">
      <div>
        <h1 className="font-semibold text-2xl">{total}</h1>
        <span className="text-gray-500 text-sm">{title}</span>
      </div>
      <div>
        <span>{<Icon className="w-[3rem]" />}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
