import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { useContext } from "react";
import NavContext from "src/context/Navcontext";
import { constants } from "buffer";
const MobileNav = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { toggle, showMobileNav } = useContext(NavContext);

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
