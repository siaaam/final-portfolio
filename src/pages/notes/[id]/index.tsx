import React, { useEffect } from "react";
import { useRouter } from "next/router";
import notesData from "../../../data/notes/notesData";
const index = () => {
  const router = useRouter();
  const { id: paramID } = router.query;
  const note = notesData.find((note) => note.id === Number(paramID));

  return (
    <section>
      <h2>{note?.title}</h2>
      <p>{note?.description}</p>
    </section>
  );
};

export default index;
