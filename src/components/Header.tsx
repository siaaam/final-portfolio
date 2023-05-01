import React from "react";
import PCNav from "./PCNav";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <header className="flex items-center justify-between py-3">
      {!isTabletOrMobile ? <PCNav /> : <MobileNav />}
    </header>
  );
};

export default Header;
