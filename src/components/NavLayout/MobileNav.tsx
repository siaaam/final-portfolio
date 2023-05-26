import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
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
