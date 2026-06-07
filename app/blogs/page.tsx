import Blog from "@/components/Blog";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";
import { getAllPosts } from "@/lib/posts";

const BlogsPage = async () => {
  const blogs = getAllPosts();

  return (
    <>
      <Heading title="Blogs" emoji="✍️" />
      <Summary>
        Writing helps me clarify what I&apos;m learning and share the ideas,
        patterns, and lessons I pick up along the way. Each piece is a snapshot
        of how I was thinking about the problem at the time.
      </Summary>
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
