import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import linksData from "src/data/links/link";
import { useRouter } from "next/router";

const PCNav = () => {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <div>
        <h1 className="text-2xl">S.</h1>
      </div>
      <ul className="flex gap-6">
        {linksData.map((link) => {
          return (
            <li key={link.id}>
              <Link
                className={` px-1 ${
                  router.pathname === link.url
                    ? "border-b-2 border-blue-500"
                    : " "
                }`}
                href={link.url}
              >
                {link.link}
              </Link>
            </li>
          );
        })}
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
    </>
  );
};

export default PCNav;
