import React, { useReducer, createContext, useContext, Children } from "react";

const INITIAL_STATE = {
  visible: false,
  message: "",
};
const alertReducer = (state, action) => {
  switch (action.type) {
    case "show_alert":
      return {
        ...state,
        visible: true,
        message: action.payload,
      };

    case "hide_alert":
      return { ...state, visible: false, message: "" };
    default:
      return state;
  }
};

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, INITIAL_STATE);
  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertContext.Provider>
  );
};
export const useAlert = () => useContext(AlertContext);
