import axios from "axios";

import Highlight from "react-highlight";

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  console.log(id);
  try {
    const res = await axios.get(`http://127.0.0.1:1337/api/notes/${id}`);
    const data = res.data;
    return {
      props: { data },
    };
  } catch (err) {
    return {
      props: { data: null },
    };
  }
}

const index = ({ data }) => {
  return data ? (
    <section>
      <h2>{data?.data?.attributes?.title}</h2>
      <p>{data?.data?.attributes?.description}</p>
      <div>
        <Highlight innerHTML={true}>{data?.data?.attributes?.body}</Highlight>
      </div>
    </section>
  ) : (
    <p>yoo</p>
  );
};

export default index;
