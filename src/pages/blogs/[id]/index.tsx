import React, { useEffect } from "react";
import { useRouter } from "next/router";
import blogs from "../../../data/blogs/blogs";
const index = () => {
  const router = useRouter();
  const { id: paramID } = router.query;
  const blog = blogs.find((note) => note.id === Number(paramID));

  return (
    <section>
      <h2>{blog?.title}</h2>
      <p>{blog?.description}</p>
    </section>
  );
};

export default index;
