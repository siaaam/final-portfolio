import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ id, title, description, tag, github, live }) => {
  return (
    <div className="shadow-md shadow-gray-500/40 dark:shadow-indigo-950 hover:shadow-gray-600 dark:hover:shadow-indigo-500/70 px-3 py-4 transition-shadow duration-150 ease-in">
      <React.Fragment>
        <div className="hover:cursor-pointer">
          <h3 className="mb-3 font-bold">{title}</h3>
          <p className="mb-2 text-xs md:text-base">
            {description.slice(0, 200) + "..."}
          </p>
          <p className="text-xs mt-5 font-semibold">{tag}</p>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href={github}>
            <BiLinkExternal className="text-3xl transform hover:scale-110 transition duration-200" />
          </Link>
          <Link href={live}>
            <FiGithub className="text-3xl transform hover:scale-110 transition duration-300" />
          </Link>
        </div>
      </React.Fragment>

      {/* class="flex min-h-[225px] flex-col items-start gap-4 rounded-lg p-6 shadow-md transition-shadow duration-150 ease-in hover:shadow-gray-400 dark:border dark:border-gray-700 dark:hover:shadow-gray-700" */}
    </div>
  );
};

export default ProjectCard;
