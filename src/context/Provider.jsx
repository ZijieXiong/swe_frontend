import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <Context.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
