import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

const SingleBlog = ({ blog }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <React.Fragment key={blog.id}>
      <div key={blog.id} className="flex justify-between items-center">
        <div className="flex gap-7">
          {!isTabletOrMobile && (
            <div className="max-h-[100px] max-w-[300px] min-w-[200px] bg-black">
              img
            </div>
          )}
          <div>
            <h4>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </h4>
            <span className="text-xs md:text-sm">
              {blog.description.length > 100 && !isTabletOrMobile
                ? blog.description.slice(0, 200) + "..."
                : blog.description.slice(0, 150) + "..."}
            </span>
            <div className="pt-3">
              <button className="text-sm hover:opacity-70">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleBlog;
