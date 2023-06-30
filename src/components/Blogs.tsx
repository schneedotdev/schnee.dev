import Link from "next/link";

type BlogProps = {
  title: string;
  date: string;
  slug: string;
};

export const Blog = ({ title, date, slug }: BlogProps) => {
  return (
    <Link
      className="outside-padding group flex h-full flex-col justify-between gap-3"
      href={`blogs/${slug}`}
    >
      <h3
        className="group-hover:underline group-hover:decoration-accent
      group-hover:underline-offset-4"
      >
        {title}
      </h3>
      <time className="text-tertiary group-hover:text-secondary">{date}</time>
    </Link>
  );
};

export const BlogPreview = () => {
  return (
    <div className="mt-20 w-full">
      <h2 className="text-primary">
        <Link href="/blogs">Blogs</Link>
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:grid-rows-1">
        <Blog
          title="How to Learn and Use TypeScript: A Comprehensive Beginner's
            Guide"
          date="March 10, 2023"
          slug="/how-to-learn-and-use-typescript-a-comprehensive-beginners-guide"
        />
        <Blog
          title="The Types You Need - Learning TypeScript"
          date="March 13, 2023"
          slug="/blog/"
        />
        <Blog
          title="Rust's most unique memory management features explained -
            Ownership and Borrowing"
          date="February 15, 2023"
          slug="/blog/"
        />
      </div>
    </div>
  );
};
