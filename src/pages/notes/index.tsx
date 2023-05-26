import AllNotes from "@components/AllNotes";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("http://127.0.0.1:1337/api/notes");
  const data = res.data;
  return {
    props: { data },
  };
}

const index = ({ data }) => {
  const { data: notesData, meta: notesMeta } = data;
  return notesData && <AllNotes notesData={notesData} />;
};

export default index;
