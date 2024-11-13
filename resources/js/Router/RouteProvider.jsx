import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from ".";
import { ModalProvider } from "../Reducers/modalReducer";
import { AlertProvider } from "../Reducers/AlertReducer";

const RouteProvider = () => {
  return (
    <ModalProvider>
      <AlertProvider>
        <RouterProvider router={router}></RouterProvider>
      </AlertProvider>
    </ModalProvider>
  );
};

export default RouteProvider;
