import React, { createContext } from 'react';

export const MyContext = createContext("");

const ContextProvider = ({ children }) => {
  const dulieu = "Xin chào từ ContextProvider! 👋";

  return (
    <MyContext.Provider value={dulieu}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
