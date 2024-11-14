import React, { useEffect } from "react";
import AppCloseButton from "./AppCloseButton";
import { useAlert } from "~/Reducers/AlertReducer";

const Alert = () => {
  const { state, dispatch } = useAlert();

  useEffect(() => {
    if (state.visible) {
      const timer = setTimeout(() => dispatch({ type: "hide_alert" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div
      className={`${state.visible ? "block fixed right-11 top-6" : "hidden"} rounded-md min-w-72 w-fit p-4 bg-green-300 text-green-950`}
    >
      <div className="flex gap-x-8 justify-between items-center">
        <p>{state.message}</p>
        <AppCloseButton click={() => dispatch({ type: "hide_alert" })} />
      </div>
    </div>
  );
};

export default Alert;
