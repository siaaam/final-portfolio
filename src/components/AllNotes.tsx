import Link from "next/link";
import React from "react";
import notes from "src/data/notes/notesData";

const AllNotes = () => {
  return (
    <section className="pb-20">
      <div className="pb-10">
        <h2>All Notes</h2>
      </div>
      <div className="space-y-5 md:space-y-7">
        {notes.slice(0, 4).map((note) => {
          return (
            <div key={note.id} className="flex justify-between items-center">
              <div>
                <h3 className="font-bold mb-2 hover:text-slate-500 transition duration-300 ease-in-out">
                  <Link href={`/notes/${note.id}`}>{note.title}</Link>
                </h3>
                <span className="text-sm md:text-sm font-medium">
                  {note.description}
                </span>
              </div>

              <p>{note.tag}</p>
            </div>
          );
        })}
      </div>
      <div className="relative mt-8">
        {/* <button className="border-b-2 px-0.5 h-6 border-black dark:border-white">
          Read All Notes
        </button> */}
      </div>
    </section>
  );
};

export default AllNotes;
