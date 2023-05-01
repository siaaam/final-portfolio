import React from "react";
import PCNav from "./PCNav";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <header className=" bg-gray-300 dark:bg-gray-900 sticky z-50 top-0 flex items-center justify-between py-3">
      {!isTabletOrMobile ? <PCNav /> : <MobileNav />}
    </header>
  );
};

export default Header;
