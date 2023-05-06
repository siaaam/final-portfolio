import React from "react";
import blogs from "src/data/blogs/blogs";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const AllBlogs = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className="pb-10 ">
      <div className="pb-10">
        <h3>All Blogs</h3>
      </div>
      <div className="space-y-5 md:space-y-7">
        {blogs.slice(0, 4).map((blog) => {
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
                      <button className="text-sm hover:opacity-70">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="relative mt-8">
        {/* <button className="border-b-2 px-0.5 h-6 border-black dark:border-white">
          Read All Blogs
        </button> */}
      </div>
    </section>
  );
};

export default AllBlogs;
