import React from "react";

const AuthorInfo = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="flex flex-col md:flex-row-reverse gap-6 justify-between md:items-center">
        <div className="h-[200px] min-w-[200px] max-w-[200px] ">
          <img className="rounded-[50%]" src="siam.jpg" alt="" />
        </div>
        <div className="">
          <h2 className="text-slate-900 dark:text-slate-200 mb-1 md:mb-2">
            Hey, I'm Siam
          </h2>
          <p className="dark:text-slate-300 md:max-w-2xl">
            Welcome to my digital nook. I'm a self-taught web developer and
            here, I share my thoughts and what I've learned along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorInfo;
