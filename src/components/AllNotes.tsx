import SingleNote from "./SingleNote";

const AllNotes = ({ notesData }) => {
  return (
    <section className="pb-20">
      <div className="pb-10">
        <h2>All Notes</h2>
      </div>
      <div className="space-y-5 md:space-y-7">
        {notesData.slice(0, 4).map((note) => {
          const {
            id,
            attributes: { body, title, description },
          } = note;
          return (
            <SingleNote
              id={id}
              key={id}
              title={title}
              description={description}
              body={body}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllNotes;
