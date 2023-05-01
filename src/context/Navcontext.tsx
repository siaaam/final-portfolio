import { createContext, useState } from "react";
const NavContext = createContext(null);

export const NavContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const showMobileNav = () => {
    setToggle(!toggle);
  };
  const value = {
    toggle,
    showMobileNav,
  };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default NavContext;
