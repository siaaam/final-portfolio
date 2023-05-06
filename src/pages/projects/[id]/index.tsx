import { useRouter } from "next/router";
import React from "react";
import projects from "src/data/projects/projects";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((project) => project.id === Number(id));
  return (
    <section>
      <h2>{project?.title}</h2>
      <p>{project?.description}</p>
    </section>
  );
};

export default index;
