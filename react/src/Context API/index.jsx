import React, { createContext } from "react";

// 1. Create the context
export const UserContext = createContext(null);

// 2. Create the provider
export const UserProvider = ({ children }) => {
  const user = {
    MyName: "Tasha",
    MyAge: 45,
    MyGender: "F",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
