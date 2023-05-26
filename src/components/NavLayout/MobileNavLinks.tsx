import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import NavContext from "src/context/Navcontext";
import links from "src/data/links/link";

const MobileNavLinks = () => {
  const [mounted, setMounted] = useState(false);
  const { showMobileNav } = useContext(NavContext);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <>
      {/* <p>
        Variables in JavaScript are containers used to store and manipulate
        data. They allow programmers to assign values to a name and refer to
        that value later in the program. JavaScript variables are dynamically
        typed, meaning they can hold different types of data such as numbers,
        strings, objects, or even functions. To declare a variable, you can use
        the var, let, or const keywords. var is used for older versions of
        JavaScript, while let and const provide block-scoped variables.
        Variables in JavaScript are essential for performing calculations,
        storing user input, and maintaining state within an application.
      </p>
      <p>Certainly! Here are a few examples of variables in JavaScript:</p>
      <p>Example 1: Numeric Variable</p>
      <pre>
        <code className="language-javascript">
          let age = 25; console.log(age);
        </code>
      </pre>
      <p>
        <br />
        In this example, the variable age is assigned the value 25. It is
        declared using the let keyword, which creates a block-scoped variable.
        The value of age is then logged to the console.
      </p>
      <p>Example 2: String Variable</p>
      <pre>
        <code className="language-javascript">
          let name = "John Doe"; console.log(name);{" "}
        </code>
      </pre>
      <p>&nbsp;</p>
      <p>&nbsp;</p> */}

      <div className="bg-slate-800 h-full w-[90%] fixed z-50 m-auto px-3 py-6 flex justify-center items-center">
        <ul className="text-white flex flex-col gap-6 text-center">
          {links.map((link) => (
            <li key={link.id}>
              <Link onClick={showMobileNav} href={link.url}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavLinks;
