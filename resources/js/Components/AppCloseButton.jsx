import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const AppCloseButton = ({ click }) => {
  return (
    <div>
      <XMarkIcon className="text-gray-800 w-4 cursor-pointer" onClick={click} />
    </div>
  );
};

export default AppCloseButton;
