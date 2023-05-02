import React from "react";
import { VscGithub } from "react-icons/vsc";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { TfiLinkedin, TfiFacebook, TfiGithub } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="flex justify-center mt-10 md:mt-20">
      <div className="text-center flex-1 ">
        <div className="flex justify-center gap-4">
          <TfiGithub className="text-lg hover:text-cyan-700" />
          <TfiFacebook className="text-lg  hover:text-cyan-700" />
          <TfiLinkedin className="text-lg  hover:text-cyan-700" />
        </div>
        <p className="text-xs pt-12 pb-10">
          &copy; Made By Siam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
