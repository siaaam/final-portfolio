import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="bg-gray-300 dark:bg-gray-900 min-h-screen ">
      <div className=" max-w-[80%] m-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
