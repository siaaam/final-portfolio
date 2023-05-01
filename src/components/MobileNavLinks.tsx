import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import NavContext from "src/context/Navcontext";

const MobileNavLinks = () => {
  const router = useRouter();
  const { showMobileNav } = useContext(NavContext);
  const handleNavigation = (e) => {
    const routeValue = e.target.outerText.toLowerCase();
    showMobileNav();
    if (routeValue === "home") {
      router.push("/");
    } else {
      router.push(routeValue);
    }
  };
  return (
    <div className="bg-slate-800 h-full w-[90%] fixed m-auto px-3 py-6 flex justify-center items-center">
      <ul className="text-white flex flex-col gap-6 text-center">
        <li onClick={(e) => handleNavigation(e)}>Home</li>
        <li onClick={(e) => handleNavigation(e)}>Notes</li>
        <li onClick={(e) => handleNavigation(e)}>Blogs</li>
        <li onClick={(e) => handleNavigation(e)}>Projects</li>
      </ul>
    </div>
  );
};

export default MobileNavLinks;
