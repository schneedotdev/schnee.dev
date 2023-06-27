type BlogProps = {
  title: string;
  date: string;
};

const Blog = ({ title, date }: BlogProps) => {
  return (
    <a
      className="p-outside group flex h-full flex-col justify-between gap-3"
      href="https://dev.to/brianschnee/how-to-learn-and-use-typescript-a-comprehensive-beginners-guide-5l"
    >
      <h3
        className="group-hover:underline group-hover:decoration-emerald-500
      group-hover:underline-offset-4"
      >
        {title}
      </h3>
      <time className="text-tertiary-color group-hover:text-secondary-color">
        {date}
      </time>
    </a>
  );
};

const Blogs = () => {
  return (
    <div className="mt-20 w-full">
      <h2 className="text-primary-color">Blogs</h2>

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:grid-rows-1">
        <Blog
          title="How to Learn and Use TypeScript: A Comprehensive Beginner's
            Guide"
          date="March 10, 2023"
        />
        <Blog
          title="The Types You Need - Learning TypeScript"
          date="March 13, 2023"
        />
        <Blog
          title="Rust's most unique memory management features explained -
            Ownership and Borrowing"
          date="February 15, 2023"
        />
      </div>
    </div>
  );
};

export default Blogs;
