import { getAllBlogsMeta } from "@/lib/mdx";
import Blog from "@/components/Blog";
import Heading from "@/components/Heading";
import Summary from "@/components/Summary";

const BlogsPage = async () => {
  const blogs = await getAllBlogsMeta();

  return (
    <>
      <Heading content="Blogs" emoji="✍️" />
      <Summary
        content="Along with learning, I am energized by sharing my knowledge and
        experiences with others. I hope you take the time to explore my blog
        articles."
      />
      <hr className="mt-10 border-tertiary" />
      <section className="mt-10 flex flex-col gap-7">
        {blogs
          .sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            if (aDate < bDate) return 1;
            if (aDate > bDate) return -1;
            return 0;
          })
          .map((blog) => (
            <Blog
              title={blog.title}
              date={blog.date}
              slug={blog.slug}
              key={blog.title}
            />
          ))}
      </section>
    </>
  );
};

export default BlogsPage;
