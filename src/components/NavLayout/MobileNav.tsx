import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { useContext } from "react";
import NavContext from "src/context/Navcontext";

const MobileNav = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { toggle, showMobileNav } = useContext(NavContext);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
      <div>
        <h1 className="text-2xl">S.</h1>
      </div>
      <div>
        {resolvedTheme === "light" ? (
          <button onClick={() => setTheme("dark")}>
            <BsFillMoonFill />
          </button>
        ) : (
          <button onClick={() => setTheme("light")}>
            <BsFillSunFill />
          </button>
        )}
      </div>
      <div onClick={showMobileNav}>
        {!toggle ? <GiHamburgerMenu /> : <RxCross2 />}
      </div>
    </>
  );
};

export default MobileNav;
