import Link from "next/link";

type BlogProps = {
  title: string;
  date: string;
  slug: string;
};

const Blog = ({ title, date, slug }: BlogProps) => {
  return (
    <Link
      className="outside-padding group flex h-full flex-col justify-between gap-3"
      href={slug}
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

export default Blog;
