import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from ".";

const RouteProvider = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default RouteProvider;
