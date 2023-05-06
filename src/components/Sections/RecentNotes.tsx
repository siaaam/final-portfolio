import Link from "next/link";
import React from "react";
import notes from "src/data/notes/notesData";

const RecentNotes = () => {
  return (
    <section className="pb-20">
      <div className="pb-10">
        <h2>Recent Notes</h2>
      </div>
      <div className="space-y-5 md:space-y-7">
        {notes.slice(0, 4).map((note) => (
          <div key={note.id} className="flex justify-between items-center">
            <div>
              <h3 className="font-bold mb-2 	">{note.title}</h3>
              <span className="text-sm md:text-sm font-medium">
                {note.description}
              </span>
            </div>

            <p>{note.tag}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-8">
        <Link
          href={"/notes"}
          className="border-b-2 px-0.5 h-6 border-black dark:border-white"
        >
          Read All Notes
        </Link>
      </div>
    </section>
  );
};

export default RecentNotes;
