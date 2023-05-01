import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavContext from "src/context/Navcontext";
import links from "src/data/links/link";
import dynamic from "next/dynamic";

const MobileNavLinks = () => {
  const [mounted, setMounted] = useState(false);
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
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="bg-slate-800 h-full w-[90%] fixed z-50 m-auto px-3 py-6 flex justify-center items-center">
      <ul className="text-white flex flex-col gap-6 text-center">
        {links.map((link) => (
          <React.Fragment key={link.id}>
            <li onClick={(e) => handleNavigation(e)}>{link.link}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavLinks;
