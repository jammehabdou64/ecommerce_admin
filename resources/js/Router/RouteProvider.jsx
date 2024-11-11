import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from ".";
import { ModalProvider } from "../Reducers/modalReducer";

const RouteProvider = () => {
  return (
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  );
};

export default RouteProvider;
