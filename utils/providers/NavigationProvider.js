import React, { createContext, useContext } from "react";

const NavContext = createContext(null);

const NavProvider = ({ active, children }) => {
  return (
    <NavContext.Provider value={{ active }}>{children}</NavContext.Provider>
  );
};

export const useNavProvider = () => useContext(NavContext);
export default NavProvider;
