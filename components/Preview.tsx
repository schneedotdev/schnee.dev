import Link from "next/link";
import Blog from "./Blog";
import { allPosts } from "@/.contentlayer/generated";
import { sortByDate } from "@/lib/utils";

const Preview = async () => {
  const blogs = sortByDate(await allPosts.slice(0, 3));

  return (
    <div className="mt-20 w-full">
      <h2 className="text-primary">
        <Link href="/blogs">Blogs</Link>
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:grid-rows-1">
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog.title}
              title={blog.title}
              date={blog.date}
              slug={blog.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
