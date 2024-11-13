import React, { useReducer, createContext, useContext } from "react";

// Define your initial state and reducer
const INITIAL_STATE = {
  isModalOpen: false,
  isEditModalOpen: false,
};
const modalReducer = (state, action) => {
  switch (action.type) {
    case "openModal":
      return {
        ...state,
        isModalOpen: true,
      };

    case "closeModal":
      return { ...state, isModalOpen: false };

    case "openEditModal":
      return {
        ...state,
        isEditModalOpen: true,
      };
    case "closeEditModal":
      return { ...state, isEditModalOpen: false };
    // Add other cases as needed
    default:
      return state;
  }
};

// Create Context
const ModalContext = createContext();

// Create a Provider component
export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
