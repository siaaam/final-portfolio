import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import MobileNavLinks from "./MobileNavLinks";
import NavContext from "src/context/Navcontext";

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { toggle, showMobileNav } = useContext(NavContext);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <main className="bg-gray-300 dark:bg-gray-900 min-h-screen ">
      <div className="max-w-[90%] md:max-w-[80%] m-auto">
        {mounted && <Header />}
        {toggle && <MobileNavLinks />}
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
