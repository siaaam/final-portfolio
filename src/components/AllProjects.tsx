import React from "react";
import ProjectCard from "@components/ProjectCard";
import projects from "src/data/projects/projects";

const AllProjects = () => {
  return (
    <section className="pb-10">
      <div className="pb-10">
        <h3>Recent Projects</h3>
      </div>
      <div className="grid grid-rows-1 grid-flow-row md:grid-rows-2 md:grid-flow-col gap-4">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            tag={project.tag}
            title={project.title}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
