import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="flex items-center justify-between py-3">
      <div>
        <h1 className="text-2xl">S.</h1>
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/notes"}>Notes</Link>
        </li>
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/projects"}>Projects</Link>
        </li>
      </ul>
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
    </header>
  );
};

export default Header;
