import Link from "next/link";

const SingleNote = ({ id, title, description, body }) => {
  return (
    <div key={id} className="flex justify-between items-center">
      <div>
        <h3 className="font-bold mb-2 hover:text-slate-500 transition duration-300 ease-in-out">
          <Link href={`/notes/${id}`}>{title}</Link>
        </h3>
        <span className="text-sm md:text-sm font-medium">{description}</span>
      </div>
      <p>react</p>
    </div>
  );
};

export default SingleNote;
