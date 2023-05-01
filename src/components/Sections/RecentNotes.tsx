import React from "react";

const RecentNotes = () => {
  return (
    <section className="pb-10">
      <div className="pb-10">
        <h3>Recent Notes</h3>
      </div>
      <div className="space-y-5 md:space-y-7">
        <div className="flex justify-between items-center">
          <div>
            <h4>Intersection Observer</h4>
            <span className="text-xs md:text-sm">
              The Intersection Observer Api
            </span>
          </div>
          <p>react</p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h4>How can You create a react project?</h4>
              <span className="text-xs md:text-sm">
                The Intersection Observer Api
              </span>
            </div>
            <p>react</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h4>Intersection Observer</h4>
              <span className="text-xs md:text-sm">
                The Intersection Observer Api
              </span>
            </div>
            <p>tag</p>
          </div>
        </div>
      </div>
      <div className="relative mt-8">
        <button className="hover:border-b-2 px-0.5 h-6 border-black dark:border-white">
          Read All
        </button>
      </div>
    </section>
  );
};

export default RecentNotes;
