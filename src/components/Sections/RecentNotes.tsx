import React from "react";
import notes from "src/data/notes/notesData";

const RecentNotes = () => {
  return (
    <section className="pb-20">
      <div className="pb-10">
        <h3>Recent Notes</h3>
      </div>
      <div className="space-y-5 md:space-y-7">
        {notes.slice(0, 4).map((note) => (
          <div key={note.id} className="flex justify-between items-center">
            <div>
              <h4>{note.title}</h4>
              <span className="text-xs md:text-sm">{note.description}</span>
            </div>
            <p>{note.tag}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-8">
        <button className="border-b-2 px-0.5 h-6 border-black dark:border-white">
          Read All Notes
        </button>
      </div>
    </section>
  );
};

export default RecentNotes;
