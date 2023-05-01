import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ id, title, description, tag, github, live }) => {
  return (
    <div className="shadow shadow-gray-500/40 hover:shadow-indigo-500/40 px-3 py-4 ">
      <React.Fragment>
        <div className="hover:cursor-pointer">
          <h3 className="mb-3">{title}</h3>
          <p className="mb-2 text-sm md:text-base">{description}</p>
          <p className="text-xs">{tag}</p>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href={github}>
            <BiLinkExternal className="text-3xl" />
          </Link>
          <Link href={live}>
            <FiGithub className="text-3xl" />
          </Link>
        </div>
      </React.Fragment>
    </div>
  );
};

export default ProjectCard;
