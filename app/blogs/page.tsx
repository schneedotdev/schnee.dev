// import { getAllBlogsMeta } from "@/lib/mdx";
import Blog from "@/components/Blog";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";
import { allPosts } from "@/.contentlayer/generated";
import { sortByDate } from "@/lib/utils";

const BlogsPage = async () => {
  const blogs = sortByDate(await allPosts);

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
        {blogs.map((blog) => (
          <Blog
            key={blog.title}
            title={blog.title}
            date={blog.date}
            slug={blog.slug}
          />
        ))}
      </section>
    </>
  );
};

export default BlogsPage;
