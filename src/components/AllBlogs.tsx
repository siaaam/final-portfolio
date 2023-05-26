import blogs from "src/data/blogs/blogs";
import SingleBlog from "./SingleBlog";

const AllBlogs = () => {
  return (
    <section className="pb-10 ">
      <div className="pb-10">
        <h3>All Blogs</h3>
      </div>
      <div className="space-y-5 md:space-y-7">
        {blogs.slice(0, 4).map((blog) => (
          <SingleBlog blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
